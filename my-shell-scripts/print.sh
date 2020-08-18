#!/bin/sh
FILE="/home/joaozinho/scripts/teste.sh"
if [ -e "$FILE" ]
    then 
        echo "O caminho $FILE está habilitado"
    else 
        echo "O caminho $FILE"