 var isNeedVerified= true; if(isNeedVerified){	aa.print("Let's start to test Create Condition with Model.");	testCreateAddressCondition();	testCreateCommonCondition();	testCreateCAPCondition();	testCreateParcelCondition();	testCreateOwnerCondition();	testCreateLPCondition();	testCreateAssetCondition();}else{	aa.print("OK.");}function testCreateCommonCondition(){	var commontCondition = aa.commonCondition.getNewCommonConditionModel().getOutput();	var entityType= "NEWSTRUCTURE"; // CONTACT, NEWSTRUCTURE, ESTABLISHMENT	var entityID = "3"; // One Contact Seq	var description= "sky_20101019";	var auditStatus = "A";	var conditionType = '50-Cred';		commontCondition.setEntityID(entityID);	commontCondition.setEntityType(entityType);	commontCondition.setConditionDescription(description);	commontCondition.setConditionType(conditionType);	commontCondition.setAuditStatus(auditStatus);	var scriptResult = aa.commonCondition.addCommonCondition(commontCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}function testCreateCAPCondition(){	var capCondition = aa.capCondition.getNewConditionScriptModel().getOutput();	var capId = aa.cap.getCapID("10CAP", "00000", "000FT").getOutput();	var description= "Sky_20101019";	var auditStatus = "A";	var conditionType = '50-Cred';		capCondition.setCapID(capId);	capCondition.setConditionDescription(description);	capCondition.setConditionType(conditionType);	capCondition.setAuditStatus(auditStatus);	var scriptResult = aa.capCondition.createCapCondition(capCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}function testCreateAddressCondition(){	var addressCondition = aa.addressCondition.getNewConditionScriptModel().getOutput();	var number= "124670";	var description= "sky_2010";	var auditStatus = "A";	var conditionType = '50-Term';	addressCondition.setAddressNumber(number);	addressCondition.setConditionDescription(description);	addressCondition.setConditionType(conditionType);	addressCondition.setAuditStatus(auditStatus);	var scriptResult = aa.addressCondition.createAddressCondition(addressCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}function testCreateParcelCondition(){	var parcelCondition = aa.parcelCondition.getNewConditionScriptModel().getOutput();	var number= "110";	var description= "Condition Description";	var auditStatus = "A";	var conditionType = '50-Cred';	parcelCondition.setParcelNumber(number);	parcelCondition.setConditionDescription(description);	parcelCondition.setConditionType(conditionType);	parcelCondition.setAuditStatus(auditStatus);	var scriptResult = aa.parcelCondition.createParcelCondition(parcelCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}function testCreateOwnerCondition(){	var ownerCondition = aa.condition.getNewOwnerConditionScriptModel().getOutput();	var number= "52";	var description= "Condition Description";	var auditStatus = "A";	var conditionType = '50-Cred';	ownerCondition.setOwnerNumber(number);	ownerCondition.setConditionDescription(description);	ownerCondition.setConditionType(conditionType);	ownerCondition.setAuditStatus(auditStatus);	var scriptResult = aa.condition.createCondition(ownerCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}function testCreateLPCondition(){	var caeCondition = aa.caeCondition.getNewConditionScriptModel().getOutput();	var number= "1178178";	var description= "Condition Description";	var auditStatus = "A";	var conditionType = '50-Cred';	caeCondition.setLicenseSeqNo(number);	caeCondition.setConditionDescription(description);	caeCondition.setConditionType(conditionType);	caeCondition.setAuditStatus(auditStatus);	var scriptResult = aa.caeCondition.createCAECondition(caeCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}	}function testCreateAssetCondition(){	var assetCondition = aa.condition.getNewAssetConditionScriptModel().getOutput();	var number= "2";	var description= "Condition Description";	var auditStatus = "A";	var conditionType = '50-Cred';	assetCondition.setAssetNumber(number);	assetCondition.setConditionDescription(description);	assetCondition.setConditionType(conditionType);	assetCondition.setAuditStatus(auditStatus);	var scriptResult = aa.condition.createCondition(assetCondition);	if(scriptResult.getSuccess())	{		aa.print("Success");	}	else	{		aa.print("ERROR: " + scriptResult.getErrorMessage()); 	}}