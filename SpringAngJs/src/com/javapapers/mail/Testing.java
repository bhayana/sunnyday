package com.javapapers.mail;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimerTask;
 
public class Testing extends TimerTask
{
 
	public void run()
	{
 
                GMailServer sender = new GMailServer(Constants.setFrom, Constants.setPassword);
 
	            try {
	            	
	            	
	        		    DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
	        			Date today = Calendar.getInstance().getTime();        
	        			String reportDate = df.format(today);
	        			
	        		    /*Configuration configuration = new Configuration();
	                    configuration.configure("hibernate.cfg.xml");
	                    SessionFactory factory=configuration.buildSessionFactory();
		        		Session session=factory.openSession();
	                    
	                    Transaction tx = session.beginTransaction();
	                    Query query = session.createQuery("Select ngoname from ngo_details_temperory where submission_date= :submission_date");
	                    query.setString("submission_date", "reportDate");
	                    List<NgoDetails> ngoList = query.list();
	                    String body;
	                    for(NgoDetails ngo : ngoList){
	                        System.out.println("User Ngo Name:"+ngo.getNgoname()+","+ngo.getNgocity());
	                        body="User Ngo Name:"+ngo.getNgoname()+","+ngo.getNgocity();
	                        sender.sendMail("New user on HelpNation.com",body,Constants.setFrom,Constants.emailTO);
	                        
	                    }*/
	            	
	        			
	        			
	        				Class.forName("com.mysql.jdbc.Driver");
	        				Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root", "Anshul12");
	        				Statement st=null;
	        				st = connection.createStatement();
	        				String sql;
	        				sql="Select ngoname from ngo_details_temperory where submission_date="+reportDate;
	        				ResultSet rs= st.executeQuery(sql);
	        				 while(rs.next()){
	        			        
	        			      
	        			         String name = rs.getString("ngoname");

	        			         System.out.println(" Name: " + name);
	        			      

	        			}} catch (SQLException e) {
	        				System.out.println("Connection Failed! Check output console");
	        				e.printStackTrace();
	        				//return ;
	        			}catch (ClassNotFoundException e) {
	        				System.out.println("Where is your MySQL JDBC Driver?");
	        				e.printStackTrace();
	        				//return;
	        			}
			    
			
                   catch (Exception e) {
			     e.printStackTrace();
			}  
 
				System.out.println("Email Sent Succesfully...");
 
	        }
}