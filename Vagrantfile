# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.define "web1" do |web1|
	    web1.vm.box = "scotch/box"
	    web1.vm.network "private_network", ip: "192.168.33.10"
	    web1.vm.network "forwarded_port", guest: 80, host:8080
	    web1.vm.hostname = "scotchbox"
	    web1.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]
	    # Optional NFS. Make sure to remove other synced_folder line too
	    #config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }
	end

	config.vm.define "web2" do |web2|
	    web2.vm.box = "scotch/box"
	    web2.vm.network "private_network", ip: "192.168.33.20"
	    web2.vm.network "forwarded_port", guest: 30, host:3000
	    web2.vm.hostname = "scotchbox2"
	    web2.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]
	    # Optional NFS. Make sure to remove other synced_folder line too
	    #config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }
	end
end
