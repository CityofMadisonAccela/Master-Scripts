 /*********************************************************************** * Accela Automation * File:  * Accela, Inc. * Copyright (C): 2010 *  * Description: Get Parcel List For Admin by EMSE. *  * Notes: * * Revision History: **********************************************************************///Set parameters to get pracel list for admin.var parcel = "232-632-04";var addressStart = "";var addressEnd = "";var direction = "";var streetName = "";var suffix = "";var unitStart = "";var unitEnd = "";var city = "";var ownerName = "";//Get Parcel List For Admin.var result = aa.parcel.getParceListForAdmin(parcel,addressStart,addressEnd,direction,streetName,	suffix,unitStart,unitEnd,city,ownerName);if(result.getSuccess()){	//If Get Parcel List Successefully.	var parcelArray = result.getOutput();	if(parcelArray != null)	{ 			var size = parcelArray.length;		for(var i=0; i<size; i++)		{			var parcelInfoModel = parcelArray[i];			if(parcelInfoModel.getParcelModel() != null && 				parcelInfoModel.getParcelModel().getParcelAttribute() != null)			{				var its = parcelInfoModel.getParcelModel().getParcelAttribute().iterator();				while(its.hasNext())				{					var l3APOAttributeModel = its.next();					aa.print(" attributeName :" + l3APOAttributeModel.getAttributeName());					aa.print(" attributeLabel :" + l3APOAttributeModel.getAttributeLabel());					aa.print(" attributeValue :" + l3APOAttributeModel.getAttributeValue());										aa.print("-----------------------------------------------------------------");				}								attributeListSize = parcelInfoModel.getParcelModel().getParcelAttribute().size();				aa.print(" Parcel Model Attribute Size: " + i + " " + attributeListSize);			}						aa.print("-----------------------------------------------------------------");		}	}}else{	//If Activate fail, then print the error message.	aa.print(result.getErrorMessage());}