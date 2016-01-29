package com.javapapers.spring.mvc;

import javax.persistence.Column;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

//@XmlRootElement(name="user")

public class NgoDetails {

    private String userName;
    private String ngoname; 
    private String foundation;
    private String foundationtype;
    private String ngoemail;
    private String ngoownername;
    private String ngotelno;

	private String ngoaddressline1;
    private String ngoaddressline2;
    private String ngocountry;
    private String ngocity;
    private String ngopin;
    private int id;
    
    private String randomno;
    private String submission_date;
    
    @Column(length=100000)
	private byte[] authorization_letter;
    
    
    
    public byte[] getAuthorization_letter() {
		return authorization_letter;
	}
	public void setAuthorization_letter(byte[] authorization_letter) {
		this.authorization_letter = authorization_letter;
	}
	public String getRandomno() {
		return randomno;
	}
	public void setRandomno(String randomno) {
		this.randomno = randomno;
	}
	
    
    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNgotelno() {
		return ngotelno;
	}
	public void setNgotelno(String ngotelno) {
		this.ngotelno = ngotelno;
	}
	public void setFoundationtype(String foundationtype) {
		this.foundationtype = foundationtype;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getNgoname() {
		return ngoname;
	}
	public void setNgoname(String ngoname) {
		this.ngoname = ngoname;
	}
	public String getFoundation() {
		return foundation;
	}
	public void setFoundation(String foundation) {
		this.foundation = foundation;
	}
	public String getFoundationtype() {
		return foundationtype;
	}
	public void setNgotype(String foundationtype) {
		this.foundationtype = foundationtype;
	}
	public String getNgoemail() {
		return ngoemail;
	}
	public void setNgoemail(String ngoemail) {
		this.ngoemail = ngoemail;
	}
	public String getNgoownername() {
		return ngoownername;
	}
	public void setNgoownername(String ngoownername) {
		this.ngoownername = ngoownername;
	}
	
	public String getNgoaddressline1() {
		return ngoaddressline1;
	}
	public void setNgoaddressline1(String ngoaddressline1) {
		this.ngoaddressline1 = ngoaddressline1;
	}
	public String getNgoaddressline2() {
		return ngoaddressline2;
	}
	public void setNgoaddressline2(String ngoaddressline2) {
		this.ngoaddressline2 = ngoaddressline2;
	}
	public String getNgocountry() {
		return ngocountry;
	}
	public void setNgocountry(String ngocountry) {
		this.ngocountry = ngocountry;
	}
	public String getNgocity() {
		return ngocity;
	}
	public void setNgocity(String ngocity) {
		this.ngocity = ngocity;
	}
	public String getNgopin() {
		return ngopin;
	}
	public void setNgopin(String ngopin) {
		this.ngopin = ngopin;
	} 
	public String getSubmission_date() {
		return submission_date;
	}
	public void setSubmission_date(String submission_date) {
		this.submission_date = submission_date;
	}

}
