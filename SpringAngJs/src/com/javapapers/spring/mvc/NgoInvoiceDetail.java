package com.javapapers.spring.mvc;

import javax.persistence.Column;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


public class NgoInvoiceDetail {

    private String username;
    private String randomno;
    
	private String invoicedescription; 
    private String invoicetitle;
    private int id;
    @Column(length=100000)
	private byte[] invoice;
    private String invoiceamount;
   
    
    public String getRandomno() {
		return randomno;
	}
	public void setRandomno(String randomno) {
		this.randomno = randomno;
	}
    public String getInvoiceamount() {
		return invoiceamount;
	}
	public void setInvoiceamount(String invoiceamount) {
		this.invoiceamount = invoiceamount;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getInvoicedescription() {
		return invoicedescription;
	}
	public void setInvoicedescription(String invoicedescription) {
		this.invoicedescription = invoicedescription;
	}
	public String getInvoicetitle() {
		return invoicetitle;
	}
	public void setInvoicetitle(String invoicetitle) {
		this.invoicetitle = invoicetitle;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public byte[] getInvoice() {
		return invoice;
	}
	public void setInvoice(byte[] invoice) {
		this.invoice = invoice;
	}

	
    }
