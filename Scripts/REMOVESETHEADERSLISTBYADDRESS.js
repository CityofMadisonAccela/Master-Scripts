 /*********************************************************************** * Accela Automation * File:  * Accela, Inc. * Copyright (C): 2011 *  * Description: Remove Set Headers List By Adddress. *  * Notes: * * Revision History: **********************************************************************///Set setCode to Remove Set Headers List By Adddress.var setCode = "WENDYTEST01";//Adddress Number To Remove Set Headers List By Adddressvar addressNBR = 2076246;//Remove Set Headers List By Adddress.var result = aa.set.removeSetHeadersListByAddress(setCode,addressNBR);if(result.getSuccess()){	var removeCount = result.getOutput();	aa.print(" Success For Remove :" + removeCount);				aa.print("-----------------------------------------------------------------");}else{	//If Activate fail, then print the error message.	aa.print(result.getErrorMessage());}