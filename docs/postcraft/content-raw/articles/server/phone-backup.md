Please write a bash script I can use to make backups from my phone. I'd like a copy on this local ubuntu computer and another on the LAN.
The source dirs on the phone are :
```
/run/user/1000/gvfs/mtp:host=Blackview_BV6200_BV6200EEA0014999/SanDisk SD card/DCIM
/run/user/1000/gvfs/mtp:host=Blackview_BV6200_BV6200EEA0014999/SanDisk SD card/Music$
/run/user/1000/gvfs/mtp:host=Blackview_BV6200_BV6200EEA0014999/SanDisk SD card/Documents
/run/user/1000/gvfs/mtp:host=Blackview_BV6200_BV6200EEA0014999/SanDisk SD card/Download
```
I have ssh on the lan machine, user:host is danny:monokith
The destination paths on the local machine is `/space/` and on the remote `/internal/`.
I'd like the contents of the source dir to be copied to a dir on the two destinations with a name which includes today's date in the format : `blackview-DCIM_2024-10-15`. If I run the script tomorrow it should use `blackview-DCIM_2024-10-15` etc. After copying it should compare the size of the source and destination dirs to make sure they are the same, reporting their size in MB.