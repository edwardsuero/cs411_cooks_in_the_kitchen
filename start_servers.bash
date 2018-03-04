#!/bin/bash

killall -9 node
killall -9 pgweb
export PGHOST='localhost'
export PGPORT=5432
export PGUSER='root'
export PGDATABASE=cooks_in_the_kitchen
node src/server.js > express.log &
./pgweb --host localhost --user root --db cooks_in_the_kitchen > pgweb.log &
#./pgweb postgres://root:@localhost:5432/cooks_in_the_kitchen > pgweb.log &

