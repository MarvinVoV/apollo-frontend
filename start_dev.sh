#!/bin/bash

# Check nginx first
CONFIG_PATH=`pwd`
CONFIG_FILE=${CONFIG_PATH}/nginx.conf

nginx -t -c ${CONFIG_FILE}
if [[ $? -ne 0 ]]; then
    echo 'There is an error in the nginx configuration file.'
    exit;
fi


echo "build web..."
npm run build:dev
if [[ $? -ne 0 ]]; then
    echo "build failed"
    exit;
fi
echo "build done."


echo "start nginx ..."

( nginx -s quit ) || nginx -c ${CONFIG_FILE}

echo "nginx OK"

