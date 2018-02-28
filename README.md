# A Node for CyberSmart Devices 
###### To be mounted inside a mains power plug, operating on the GPIO pins of a Raspberry Pi
This application is designed to interact with the GPIO pins of a Raspberry Pi and update the state to correspond with the action.
## Post Requests
### /changestate
The route `/changestate` calls the function `ChangeState(state)` in the `StateHandler` class. The route should be served a request body containing a state parameter of either `1` or `0`. See the `ChangeState(state)` method documentation for details on what each parameter does.
## Methods
### ChangeState
The method `ChangeState(state)` is designed to read a variable (state) and update the state of a light accordingly. The states that can be received are: 
- 1 : This state sets the GPIO pin to high (on)
- 0 : This state sets the GPIO pin to low (off)