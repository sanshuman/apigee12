 print("Environment Properties")
 print("Property 1:" + context.getVariable("xyz.Environment.Config.Property1"));
 print("Property 2:" + context.getVariable("xyz.Environment.Config.Property2"));
 
 print("API Properties")
 print("Max Message:" + context.getVariable("xyz.API.Config.MaximumMessageSize"));
 print("Target Base:" + context.getVariable("xyz.API.Config.Base"));
 print("Security:" + context.getVariable("xyz.API.Config.Security"));
 print("Spike:"+ context.getVariable("xyz.API.Config.Spike"));
 print("ScrubCreds:"+ context.getVariable("xyz.API.Config.ScrubCreds"));
 print("SpikeEnabled:"+ context.getVariable("xyz.API.Config.SpikeEnabled"));
 print("QuotaEnabled:"+ context.getVariable("xyz.API.Config.QuotaEnabled"));