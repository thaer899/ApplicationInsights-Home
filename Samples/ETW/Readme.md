# Event Tracing for Windows (ETW)

Event Tracing for Windows (ETW) provides application programmers the ability to start and stop event tracing sessions, instrument an application to provide trace events, and consume trace events. Trace events contain an event header and provider-defined data that describes the current state of an application or operation. You can use the events to debug an application and perform capacity and performance analysis. [Source](https://docs.microsoft.com/windows/desktop/etw/event-tracing-portal)

The Application Insights .NET products use ETW to track exceptions and custom errors within our products.


## EventSources

Logs are emitted from [EventSource](https://docs.microsoft.com/dotnet/api/system.diagnostics.tracing.eventsource?view=netframework-4.8) classes.

Vance Morrison's blog has several articles for getting started:
- https://blogs.msdn.microsoft.com/vancem/2012/07/09/introduction-tutorial-logging-etw-events-in-c-system-diagnostics-tracing-eventsource/

## Application Insights EventSources

| repo        	| Provider Name                                                               	| Custom Guid                          	| Generated Guid? 	|
|-------------	|-----------------------------------------------------------------------------	|--------------------------------------	|-----------------	|
| Base SDK    	| Microsoft-ApplicationInsights-Core                                          	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-WindowsServer-TelemetryChannel                	|                                      	|                 	|
|             	|                                                                             	|                                      	|                 	|
| Web SDK     	| Microsoft-ApplicationInsights-Extensibility-AppMapCorrelation-Dependency    	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-AppMapCorrelation-Web           	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-DependencyCollector             	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-HostingStartup                  	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-PerformanceCollector            	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-PerformanceCollector-QuickPulse 	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-Web                             	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-Extensibility-WindowsServer                   	|                                      	|                 	|
|             	| Microsoft-ApplicationInsights-WindowsServer-Core                            	|                                      	|                 	|
|             	|                                                                             	|                                      	|                 	|
| Logging SDK 	| Microsoft-ApplicationInsights-Extensibility-EventSourceListener             	|                                      	|                 	|
|             	|                                                                             	|                                      	|                 	|
| Core SDK    	| Microsoft-ApplicationInsights-AspNetCore                                    	|                                      	|                 	|
|             	|                                                                             	|                                      	|                 	|
| Extensions  	| Microsoft-ApplicationInsights-FrameworkLightup                              	| 323adc25-e39b-5c87-8658-2c1af1a92dc5 	|                 	|
|             	| Microsoft-ApplicationInsights-IIS-ManagedHttpModuleHelper                   	| 61f6ca3b-4b5f-5602-fa60-759a2a2d1fbd 	|                 	|
|             	| Microsoft-ApplicationInsights-Redfield-Configurator                         	| 090fc833-b744-4805-a6dd-4cb0b840a11f 	|                 	|
|             	| Microsoft-ApplicationInsights-RedfieldIISModule                             	| 252e28f4-43f9-5771-197a-e8c7e750a984 	|                 	|
|             	| Microsoft-ApplicationInsights-Redfield-VmExtensionHandler                   	| 7014a441-75d7-444f-b1c6-4b2ec9b06f20 	|                 	|




## Tools to collect ETW

### PerfView

[PerfView](https://github.com/Microsoft/perfview) is a free diagnostics and performance-analysis tool that help isolate CPU, memory, and other issues by collecting and visualizing diagnostics information from many sources.

For more information, see [Recording performance traces with PerfView.](https://github.com/dotnet/roslyn/wiki/Recording-performance-traces-with-PerfView)

### Logman

[Logman](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/logman)

### FileDiagnosticsTelemetryModule

https://docs.microsoft.com/azure/azure-monitor/app/asp-net-troubleshoot-no-data#net-framework

### StatusMonitor v2

StatusMonitor v2 is a PowerShell module that enables codeless attach of .NET web applications.
SMv2 will ship with a cmdlet to capture ETW events. (DOCUMENTATION PENDING)

StatusMonitor uses TraceEventSession to record ETW logs.
- https://github.com/microsoft/perfview/blob/master/documentation/TraceEvent/TraceEventProgrammersGuide.md
- https://github.com/dotnet/roslyn/wiki/Recording-performance-traces-with-PerfView
- https://github.com/microsoft/perfview/blob/master/src/TraceEvent/TraceEventSession.cs