package com.javapapers.spring.mvc;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="user")

public class NgoOwner {

    private String userName;
    private String emailId;

    @XmlElement(name="name")
    public String getUserName() {
        return userName;
    }

 



	public void setUserName(String userName) {
        this.userName = userName;
    }

	@XmlElement(name="emailid")
    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {

        this.emailId = emailId;

    }
    public NgoOwner(String userName, String emailId) {
		super();
		this.userName = userName;
		this.emailId = emailId;
	}





	public NgoOwner() {
		super();
	}

}
