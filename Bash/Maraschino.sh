#!/bin/bash

IP=$1
PORT=$2
SCRIPT_ID=$3
WEBROOT=$4

SLEEP_SECS=15

if [ -z "$WEBROOT" ]; then
	URL="http://"$IP":"$PORT"/xhr/script_launcher/script_status/"$SCRIPT_ID
else
	URL="http://"$IP":"$PORT"/"$WEBROOT"/xhr/script_launcher/script_status/"$SCRIPT_ID
fi

curl -F 'status=Started Execution' $URL

sleep $SLEEP_SECS

curl -F 'status=Next part of Script' $URL

sleep $SLEEP_SECS

curl -F 'status=Doing more work' $URL

sleep $SLEEP_SECS

curl -F 'status=Going to smoke' $URL

sleep $SLEEP_SECS

curl -F 'status=Next part of Script' $URL

sleep $SLEEP_SECS

curl -F 'status=Finished' $URL
