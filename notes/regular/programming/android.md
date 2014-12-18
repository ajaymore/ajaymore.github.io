---
---

Installation

JDK
Install Android studio
Set path variables (tools and platform-tools)
adb shell pm set-install-location 2



##Android Studio :

- Ctrl + w -> incremental selection
- Ctrl + alt + v -> refactor

Threads use message queue >> are called message loop

Message loop consists of thread and looper (Looper is object that manages threads message queue)

Using Message loop
mThread = new Thread<CustomClass>();
mThread.start();
mThread.getLooper();
mThread.customMethod(CustomClassObj, arg2);
mThread.quit();


message is instance of Message class
	(what) Needs integer that describes it
	(obj) Needs object to be sent along
	(target) It also needs Handler to work upon

Handler processes your messages and also can create and post messages

Looper works with many handler and is in the business of queuing messages

HandlerThread >> Looper(Message 1...n) >> Handler(Message n)

Create Looper object that sets Handler Instance and its implementation
Create message using handlerObj.obtainMessage().sendtotarget()