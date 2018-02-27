import RPi.GPIO as GPIO
import sys
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BOARD)             
GPIO.setup(7, GPIO.OUT) # PIN 7 - our pin

GPIO.output(7, 1) 
