 /*--- Intial EMSE parameters ---*/var totalAmount = aa.env.getValue("TotalAmount");var feeSeqNbrArray = aa.env.getValue("FeeSeqNbrArray");var paymentAmountArray = aa.env.getValue("PaymentAmountArray");var paymentModel = aa.env.getValue("PaymentModel");/*--- Intial EMSE parameters ---*/function main(){	var result = true;	//Parameter FeeItemInvoiceModelArray only exists on the action of payment processing refund.	if(aa.env.getValue("FeeItemInvoiceModelArray") != "")	{		result = paymentRefundOfPaymentProcessing();	}	else if(feeSeqNbrArray != "" && feeSeqNbrArray.length > 0)	{		result = false;			}	else	{		result = paymentRefundOfRecordAndPOS();	}	if(result)	{		aa.env.setValue("ScriptReturnCode","0");		aa.env.setValue("ScriptReturnMessage", "Refund successfully.");	}}//Method for payment processing refund.function paymentRefundOfPaymentProcessing(){	if(feeSeqNbrArray == "" || feeSeqNbrArray.length == 0)	{		output(null, "There is no fee item to refund.");		return true;	}	var invoiceModelList = getX4FeeItemInvoiceModelList(true);	output(null, "--------------------- Begine of Fee Item List ---------------------------");	for(var i=0; i<feeSeqNbrArray.length; i++)	{		output(null, "--------------------- Begine of Fee Item " + i + " ---------------------------");		output("Fee Sequence Number", feeSeqNbrArray[i]);		output("Fee Schedule", invoiceModelList.get(i).getFeeSchedule());		output("Fee Description", invoiceModelList.get(i).getFeeDescription());		output("Payment Amount", paymentAmountArray[i]);		output(null, "--------------------- End of Fee Item " + i + " ---------------------------");	}	output(null, "--------------------- End of Fee Item List ---------------------------");	outputPaymentRefundInfo(paymentModel);	output("Total Refund Amount", totalAmount);	return true;}//Method for record payment and POS refund submit.function paymentRefundOfRecordAndPOS(){	outputPaymentRefundInfo(paymentModel);	output("Total Refund Amount", totalAmount);	return true;}//Method for record payment and POS refund apply.function paymentRefundApplyOfRecordAndPOS(){	if(feeSeqNbrArray == "" || feeSeqNbrArray.length == 0)	{		output(null, "There is no fee item to refund.");		return;	}	var invoiceModelList = getX4FeeItemInvoiceModelList(false);	output(null, "--------------------- Begine of Fee Item List ---------------------------");	var totalAmount = 0.00;	var capIDModel = aa.env.getValue("CapIdModel");	var isBreak = false;	for(var i=0; i<feeSeqNbrArray.length; i++)	{		var paidResult  = aa.finance.getTotalPaidFeeItem(capIDModel, feeSeqNbrArray[i]);		var refundAmount = paymentAmountArray[i];		if(paidResult.getSuccess())		{			if(refundAmount - paidResult.getOutput() > 0)			{				stop("Refund amount cannot exceed paid amount for fee " + feeSeqNbrArray[i] + ".");				isBreak = true;				break;			}		}		output(null, "--------------------- Begine of Fee Item " + i + " ---------------------------");		output("Fee Sequence Number", feeSeqNbrArray[i]);		output("Fee Schedule", invoiceModelList.get(i).getFeeSchedule());		output("Fee Description", invoiceModelList.get(i).getFeeDescription());		output("Payment Amount", refundAmount);		totalAmount = aa.util.add(totalAmount, aa.util.parseDouble(paymentAmountArray[i]));		output(null, "--------------------- End of Fee Item " + i + " ---------------------------");	}	output(null, "--------------------- End of Fee Item List ---------------------------");	if(totalAmount <= 0 && !isBreak)	{		stop("Total amount must larger than 0.");		return false;	}	else if(!isBreak)	{		output("Total Refund Amount", totalAmount);	}	return !isBreak;}function getX4FeeItemInvoiceModelList(isFromPP){	var x4FeeItemInvoiceModelList = aa.util.newArrayList();	if(isFromPP)	{		x4FeeItemInvoiceModelList.addAll(convertArrayToList(aa.env.getValue("FeeItemInvoiceModelArray")));	}	else	{		var capID = aa.env.getValue("CapIdModel");				var result = aa.finance.getValidFeeItemInvoiceListByFeeNbrList(capID, convertArrayToList(feeSeqNbrArray));		if(result.getSuccess())		{			var invoiceModelList = result.getOutput();			for(var i=0; i<invoiceModelList.size(); i++)			{				x4FeeItemInvoiceModelList.add(invoiceModelList.get(i).getX4FeeItemInvoice());			}		}	}	return x4FeeItemInvoiceModelList;}//Convert array to ArrayListfunction convertArrayToList(array){	var list = aa.util.newArrayList();	if(array == null && array != "")	{		return list;	}	for(var i=0; i<array.length; i++)	{		list.add(array[i]);	}	return list;}//If the refund fee item amount is not correct, stop to execute step by step.function stop(msg){	aa.env.setValue("ScriptReturnCode","0");	aa.env.setValue("ScriptReturnMessage", msg);}function outputPaymentRefundInfo(paymentModel){	if(paymentModel == "")	{		output(null, "There are no payment refund details.");		return;	}	output(null, "--------------------- Begine of Payment Refund Details ---------------------------");	output("Payment Method", paymentModel.getPaymentMethod());	if("Trust Account" == paymentModel.getPaymentMethod())	{		output("Account ID", paymentModel.getAcctID());	}	output("Payment Reference", paymentModel.getPaymentRefNbr());	output("Payee", paymentModel.getPayee());	output("Transaction Date:", formatDate(paymentModel.getPaymentDate()));	output("Cashier ID", paymentModel.getCashierID());	output("Payment Comments", paymentModel.getPaymentComment());	output(null, "--------------------- End of Payment Refund Details ---------------------------");}function formatDate(date){	if(date == null)	{		return "";	}	return aa.util.formatDate(date, "MM/dd/yyyy, hh:mm");}function output(name, value){	var val = "";	if(value != null)	{		val = value;	}	if(name != null)	{		aa.print(name + ": " + val);	}	else	{		aa.print(val);	}}main();