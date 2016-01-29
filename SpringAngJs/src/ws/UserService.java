package ws;

import com.javapapers.spring.mvc.UserDetails;

public class UserService {
	
	  public UserDetails getDefaultUser() {
		  UserDetails user = new UserDetails();
	        user.setUserName("JonFromREST");
	        user.setEmailId("DoeFromREST");
	        return user;
	    }

}
