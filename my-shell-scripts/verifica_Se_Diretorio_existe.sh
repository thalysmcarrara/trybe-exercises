#!/bin/sh
FILE="/home/thalys/developer/shell scripts/arquivo.txt"
if [ -e "$FILE" ]
    then 
        echo "O caminho $FILE está habilitado"
    else 
        echo "O caminho $FILE"
fi 

if [ -w "$FILE" ]
    then
        echo "voce tem permissão para editar $FILE"
    else
        echo "voce nao tem permissão para editar $FILE"
fi