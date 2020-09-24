var requestContent = context.getVariable('request.content');
var contentLength = requestContent.length;
context.setVariable("xyz.MessageSize", contentLength);