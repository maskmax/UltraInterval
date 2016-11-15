### Ultra Interval ###
>v.0.1

Did this ever happened to you that you left your browser open and after a few minutes the webpage timer fall behind the actual time? 

The main reason is either your browser( mostly mobile devices and hybrid platforms eg:Cordova) went to power saving mode or the interval function is heavy for the device to keep up with the interval.

You can use this library instead of built-in interval to avoid falling behind.


### 1.Getting Started
In this example heavyCounter is the function that you want to run and 1000 is interval time in miliseconds.

```html
<script src="interval.js"></script>
<script type="text/javascript">
window.onload = function () {
 var myInt=new ultraInterval(heavyCounter,1000);

		}
 </script>
 
```


### 2.Stop interval
You can stop the interval just like this...
```html
<script type="text/javascript">
myInt.stop();
 </script>
```
 
That's it ,Have fun with your lagless interval ;)