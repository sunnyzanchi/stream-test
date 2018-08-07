# XHR Streaming Test/Example
Testing out how easy it is get results of an XHR as they come in instead of as a whole once it's done. This method could be used to stream results from a database query that takes a long time and show them to the user more quickly, etc.

## _Note_
In hindsight, this probably is the worst way to do this. If you have some sort of requirement of "show data 
as it comes in" it's probably better to just chunk it 
server-side and use WebSockets. I haven't tested the differences or anything, but my gut tells me that WS 
would be more dev-friendly and easier to integrate with an FRP library, and the performance differences are 
probably negligible.

## Run
Run with
```
npm run start:server
```

and
```
npm run start:client
```
