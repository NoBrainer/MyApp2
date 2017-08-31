# MyApp2


## Dev Environment Setup
- Install npm and node
- Download this repository
- `npm install package.json`

### Setup .bashrc aliases
- Open .bashrc
	- `sudo vi ~/.bashrc`
- Add this:
```
# CUSTOM ALIASES
 
# ssh into server
alias sshserver='ssh {user}@{server_ip}'
 
# update server code
alias updateserver='rsync -ru --delete /path/to/deployment/directory {user}@{server_ip}:bin'
```
- Apply changes
	- `source ~/.bashrc`


## Linux Server Setup
- Install npm and node:
	- `sudo yum install npm`
- Install forever:
	- `sudo npm install forever -g`
- Update Apache configuration
	- Login to iPage's WHM
	- Service Configuration -> Apache Configuration -> Include Editor
	- For "Post VirtualHost Include", add this:
```
<VirtualHost {SERVER_IP}:{FROM_PORT}>
    ServerAdmin {ADMIN_EMAIL_ADDRESS}
    ServerName {DOMAIN}.com
    ServerAlias mail.{DOMAIN}.com www.{DOMAIN}.com
    DocumentRoot /path/to/public_html
 
    # Forward from port {FROM_PORT} to port {TO_PORT}
    ProxyPass / http://localhost:{TO_PORT}/
    ProxyPassReverse / http://localhost:{TO_PORT}/
    <Proxy *>
        Order deny,allow
        Allow from all
  </Proxy>
</VirtualHost>
```

### Setup .bashrc aliases
- Open .bashrc
	- `sudo vi ~/.bashrc`
- Add this:
```
# CUSTOM ALIASES

# Edit some files
alias editCSF='sudo vi /etc/csf/csf.conf'
alias editProps='sudo vi ~/bin/properties/config.js'
alias editRcLocal='sudo vi /etc/rc.local'
 
# Port forwarding
alias portForward='sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport {FROM_PORT} -j REDIRECT --to-port {TO_PORT}'
alias savePortForward='sudo service iptables save'
 
# Stop/start the server
# NOTE: Requires you to move stop.sh to ~/bin and do 'chmod +x stop.sh' on it
alias stopServer='~/bin/MyApp/stop.sh'
alias startServer='sudo service copycatco start'
 
# Tail the logs
alias tailCopycat='tail -f ~/logs/CopycatCo.log'
alias tailMongo='tail -f /var/log/mongodb/mongod.log'
```
- Apply changes
	- `source ~/.bashrc`

### Make mongo service run at server start-up
- Install mongodb: https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-centos-7
- `sudo service mongod start` instead of systemctl
- Make sure mongod owns the directory for its data
    - `locate mongod.conf`
    - `sudo chown -R mongod /path/to/data`
- Make sure you delete some files that may be owned by root:
	- `sudo rm /tmp/mongodb-*.sock`
	- `sudo rm /var/run/mongodb/mongod.pid`
- Set it to run at startup
	- `sudo /sbin/chkconfig --level 345 mongod on`

### Make webapp service run at start-up
- Setup init.d script for this webapp
	- Setup the copycatco service
		- `sudo cp copycatco /etc/rc.d/init.d/`
		- `sudo chmod 0755 /etc/rc.d/init.d/copycatco`
	- Set it to run at startup
		- `sudo /sbin/chkconfig --level 345 copycatco on`
	- Run the service
		- `sudo service copycatco start`
		- Or use the `startServer` alias


## Deployment Process

### Stop copycatco service
From server:
- Stop the service
	- `sudo service copycatco stop`
- Stop all forever processes
	- `forever stopall`
	- OR stop individual forever process (get forever_pid from the column named 'forever')
		- `forever list`
		- `sudo kill -9 {forever_pid}`
- Check the process on port 8080
	- `fuser 8080/tcp`
- Kill the process on port 8080
	- `fuser -k 8080/tcp`
- Delete the pid file
	- `sudo rm /var/run/CopycatCo.pid`
- Verify that it's stopped
	- `sudo service copycatco status`
	- `fuser 8080/tcp`

#### Deploy new code
From dev environment:
- `updatecopycat`

#### Restart copycatco service
From server:
- Start the service
	- `sudo service copycatco start`
- Tail the logs
	- `tailCopycat`

### Process Clean-up

#### Stop mongod service
- Stop the service
	- `sudo service mongod stop`
- Remove mongod.lock files
	- `sudo rm /data/db/mongod.lock`
	- `sudo rm /var/lib/mongo/mongod.lock`
- Delete the pid file
	- `sudo rm /var/run/mongodb/mongod.pid`
- Verify that the service is stopped
	- `sudo service mongod status`

#### Start mongod service
From server:
- Start the service
	- `sudo service mongod start`
- Tail the logs
	- `tailMongo`

### Miscellaneous Linux Commands
- Check what processes are running at start-up
	- `/sbin/chkconfig --list`
	- `/sbin/chkconfig --list | grep copycatco`
	- `/sbin/chkconfig --list | grep mongod`
- Check all processes running on ports
	- `netstat -plten`
- Kill a process with a given pid
	- `sudo kill -9 {pid}`
