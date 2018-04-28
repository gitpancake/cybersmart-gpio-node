import RPi.GPIO as GPIO
import sys

volt = int(sys.argv[1])

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)

GPIO.output(7, GPIO.HIGH)

if (volt == 0):
    GPIO.cleanup()

sys.stdout.flush()

