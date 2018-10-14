#cs ----------------------------------------------------------------------------

 AutoIt Version: 3.3.14.2
 Author:         myName

 Script Function:
	Template AutoIt script.

#ce ----------------------------------------------------------------------------

; Script Start - Add your code below here
#include <Constants.au3>
#include <WinAPI.au3>
#include <File.au3>
Local $hFile1 = FileOpen(@ScriptDir & "\ErrorLog.txt", 1)
uploadFile()

Func uploadFile()
	WinWaitActive("[REGEXPTITLE:Open*]","",10)
	Local $hWnd =  WinGetHandle( "[REGEXPTITLE:Open*]","")
	WinActivate($hWnd)
	SendKeepActive($hWnd)
	Local $cntrl = ControlFocus($hWnd, "", "[CLASS:Edit; INSTANCE:1]")
	sleep(1000)
	SendKeepActive($cntrl)
	Send($CmdLine[1])
	sleep(1000)
	Send("{ENTER}")
	sleep(5000)
	;If WinExists("[REGEXPTITLE:Open*]") Then
		;_FileWriteLog($hFile1, "Error: 'OpenFile' dialog was not closed after uploading file.");
	;EndIf
Endfunc