#!/bin/sh

echo "What do you want to install:"
read package
check=$(yum install "$package")
if [[ $check = *"resolved"* ]]; then
  echo "$package alraedy installed"
else
  yum install $package
fi

