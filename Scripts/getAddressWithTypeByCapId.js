 Script Text:// Enter your script here...id1 = "08UXH";id2 = "00000";id3 = "03903";capIDObj = aa.cap.getCapID(id1,id2,id3).getOutput();rs= aa.address.getAddressWithTypeByCapId("NOLA",capIDObj ,"ADMIN");if(rs.getSuccess()){    aa.print("Get address with successfully");    userlist= rs.getOutput();    size=userlist.length;    aa.print("Get " + size + " address type list " );}else{    aa.print("Get address with address type failed.");}//end for get Address with type