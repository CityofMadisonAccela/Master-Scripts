  /** * Description: * RegistrationSubmitBefore.js the EMSE Script that related to EMSE EVENT RegistrationSubmitBefore * * Notes: * * Revision History: * 2012/06/03     andy.zhong	Initial Version */var publicUser = aa.env.getValue("PublicUserModel");var peopleAttributes = aa.env.getValue("PeopleAttributes");var licenseList = aa.env.getValue("LicenseList");if(publicUser != null ){	if (publicUser.getPeoples() != null)	{		var userContacts = publicUser.getPeoples();		for (var i = 0; i < userContacts.size(); i++)		{			if (peopleModel.getContactAddressList() != null)			{				var contactAddressList = peopleModel.getContactAddressList();										for (var i = 0; i < contactAddressList.size(); i++)				{					var addressModel = contactAddressList.get(i);												if ("".equals(addressModel.getAddressType()))					{						aa.env.setValue("ScriptReturnCode","-1");						aa.env.setValue("ScriptReturnMessage", "Registration Public User is fail ! incorrect contact address type [ "+addressModel.getAddressType()+" ] !");					}				}			}				}	}		}//aa.env.setValue("ScriptReturnCode","-1");//aa.env.setValue("ScriptReturnMessage", "Registration Public User Submit Before is fail!");