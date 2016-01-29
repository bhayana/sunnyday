package ws;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

@javax.ws.rs.ApplicationPath("rest")
public class ApplicationConfig extends Application{

	@Override
	
		 public Set<Class<?>> getClasses() {
		        Set<Class<?>> s = new HashSet<Class<?>>();
		        s.add(Userestful.class);
		        return s;
		    }
	}
	

