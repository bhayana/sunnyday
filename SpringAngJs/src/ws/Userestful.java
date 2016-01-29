package ws;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.imageio.ImageIO;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

import com.javapapers.spring.mvc.NgoDetails;
import com.javapapers.spring.mvc.NgoInvoiceDetail;
import com.javapapers.spring.mvc.OwnerDetails;
import com.javapapers.spring.mvc.Track;
import com.javapapers.spring.mvc.UserDetails;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;




@Path(value="user")
public class Userestful {




	@Path("/findall")
	@GET
	@Produces("application/json")
	public Response findAl()
	{

		return Response.ok().entity(new UserDetails("Rajan","rajan.bhayana@gmail.com"))
				.header("Access-Control-Allow-Origin","*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With")
				.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD")
				.build();

	}
	@Path("/getInvoicesImage/{query}")
	@GET
	@Produces("image/jpeg")

	public Response getInvoicesImage(@PathParam("query") String query,
			@QueryParam("taskid") String uingoname
			) {
		
		ArrayList<byte[]> list= new ArrayList();
		Configuration cfg= new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory=cfg.buildSessionFactory();
		Session session=factory.openSession();
		Transaction t=session.beginTransaction();
		uingoname="testusername";
		String query2 = "from NgoInvoiceDetail as p where p.username ='testusername'";
		
		List list2 = session.createQuery(query2)
				//.setParameter("uingoname", uingoname)
				.list();
		
		
		
		Iterator iterator = list2.iterator();
		NgoInvoiceDetail obj =null;
		
		if(iterator.hasNext()) {
			obj = (NgoInvoiceDetail) iterator.next();
			
			
		}
		
		return Response.ok(obj.getInvoice()).build();
		
		
		
	}
	
	
	
	/*
	@Path("/getInvoices/{query}")
	@GET
	@Produces({"image/png", "image/jpg"})

	public Response getInvoicesDetails(@PathParam("query") String query,
			@QueryParam("uingoname") String uingoname
			) {
		System.out.println("Searching actor by Name: " + query);

		Statement st;
		Connection c;
		ResultSet rs;
		Blob photo = null;
		BufferedImage image;
		try {
			Class.forName("com.mysql.jdbc.Driver");

			Configuration cfg= new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory factory=cfg.buildSessionFactory();
			Session session=factory.openSession();
			Transaction t=session.beginTransaction();

			//retrieve the username from ngoname 
			System.out.println("uingoname is "+uingoname);
			String query1 = "from NgoDetails as p where p.ngoname = :uingoname";
			List list = session.createQuery(query)
					.setString("uingoname", uingoname).list();

			Iterator iterator = list.iterator();
			NgoDetails obj =null;
			
			while (iterator.hasNext()) {
				obj = (NgoDetails) iterator.next();
				System.out.print(obj.getUserName() + "\t" + "\n");
			}
			
			//retreive bill details using username from ngo_invoice_details table
			System.out.println(" the username is +" + obj.getUserName());
			String dbusername = obj.getUserName();
			String query2 = "from NgoInvoiceDetails as p where p.username = : dbusername";
			List list2 = session.createQuery(query)
					.setString("dbusername", dbusername).list();
			
			
			Iterator iterator = list.iterator();
			NgoDetails obj =null;
			
			while (iterator.hasNext()) {
				obj = (NgoDetails) iterator.next();
				System.out.print(obj.getUserName() + "\t" + "\n");
			}
			
			
			
			
			String fileLocation = "C:/My Stuff/ret.jpg";
			rs = st.getResultSet();
			int i=0;
			while (rs.next()) { // results here
				photo =  rs.getBlob("authorization_letter");
				InputStream in = rs.getBinaryStream(1);
				OutputStream f= new FileOutputStream(new File(fileLocation));
				i++;
				int x = 0;
				while ((x = in.read()) > -1) {
					f.write(x);
				}
				f.close();
				in.close();
				System.out.println(rs.getString("authorization_letter")); 
			}




		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


		byte[] buf=new byte[1024];
		ByteArrayOutputStream baos2=new ByteArrayOutputStream();
		try {

			InputStream in = photo.getBinaryStream();
			int n=0;
			while((n=in.read(buf))>=0)
			{
				baos2.write(buf,0,n);
			}
			in.close();
			byte[] bytes = baos2.toByteArray();


			image= ImageIO.read(photo.getBinaryStream());
			ImageIO.write(image, "jpg", baos2);
			return Response.ok(bytes).build();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}

*/
	@PUT
	@Path("/enrollNgo/{user}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response enrollNgo(@PathParam("user") String user ,
			@QueryParam("uingoname") String uingoname,
			@QueryParam("uifoundationname") String uifoundationname,
			@QueryParam("uingotype")String uingotype,
			@QueryParam("uingoemail")String uingoemail,
			@QueryParam("uingoownername")String uingoownername,
			@QueryParam("uicontactno")String uicontactno ,
			@QueryParam("uingoaddressline1")String uingoaddressline1,
			@QueryParam("uingoaddressline2")String uingoaddressline2,
			@QueryParam("uingocountry")String uingocountry,
			@QueryParam("uingocity")String uingocity,
			@QueryParam("uingopin")String uingopin
			)
	{

		return Response.ok().entity(new UserDetails("Rajan","rajan.bhayana@gmail.com"))
				.header("Access-Control-Allow-Origin","*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With")
				.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD")
				.build();

	}



	@PUT
	@Path("/update/{username}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response update(@PathParam("username") String userName , 
			@QueryParam("taskid") String color ,  
			@QueryParam("uingoname") String ngoname, 
			@QueryParam("uifoundationname") String foundationname,
			@QueryParam("uingotype")String uingotype,
			@QueryParam("uingoemail")String uingoemail,
			@QueryParam("uingoownername")String uingoownername,
			@QueryParam("uicontactno")String uicontactno,
			@QueryParam("uingoaddressline1")String uingoaddressline1,
			@QueryParam("uingoaddressline2")String uingoaddressline2,
			@QueryParam("uingocountry")String uingocountry,
			@QueryParam("uingocity")String uingocity,
			@QueryParam("uingopin")String uingopin,
			@QueryParam("uiownername") String uiownername,
			@QueryParam("uiownertelno")String uiownertelno,
			@QueryParam("uiowneremailid") String uiowneremailid,
			@QueryParam("uiowneraddressline1")String uiowneraddressline1 ,
			@QueryParam("uiowneraddressline2")String uiowneraddressline2,
			@QueryParam("uiownercountry")String uiownercountry,
			@QueryParam("uiownercity")String uiownercity,
			@QueryParam("uiownerpin")String uiownerpin
			)



	{	

		Configuration cfg= new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory factory=cfg.buildSessionFactory();
		Session session=factory.openSession();

		Transaction t=session.beginTransaction();
		DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
		Date today = Calendar.getInstance().getTime();        
		String reportDate = df.format(today);

		File file = new File("C:/My Stuff/one.jpg");
		long length=file.length();
		String strLong = Long.toString(length);
		System.out.println("the size of the file +:"+strLong);

		byte[] bfile = new byte[(int)file.length()];

		try{
			FileInputStream fileInputStream = new FileInputStream(file);
			fileInputStream.read(bfile);
			fileInputStream.close();
		}catch(Exception e){
			e.printStackTrace();
		}


		NgoDetails n1=new NgoDetails();
		n1.setId(1);
		n1.setNgoname(ngoname);
		n1.setFoundation(foundationname);
		n1.setFoundationtype(uingotype);
		n1.setNgoemail(uingoemail);
		n1.setNgoownername(uingoownername);
		n1.setNgotelno(uicontactno);
		n1.setNgoaddressline1(uingoaddressline1);
		n1.setNgoaddressline2(uingoaddressline2);
		n1.setNgocountry(uingocountry);
		n1.setNgocity(uingocity);
		n1.setNgopin(uingopin);
		n1.setSubmission_date(reportDate);
		//n1.setImagedata(bfile);
		n1.setAuthorization_letter(bfile);

		session.persist(n1);//persisting the object  

		OwnerDetails o1=new OwnerDetails();
		o1.setId(1);
		o1.setNgoownername(uiownername);
		o1.setNgoownertelno(uiownertelno);
		o1.setNgoemailid(uiowneremailid);
		o1.setNgoowneraddressline1(uiowneraddressline1);
		o1.setNgoowneraddressline2(uiowneraddressline2);
		o1.setNgoownercountry(uiownercountry);
		o1.setNgoownercity(uiownercity);
		o1.setNgoownerpin(uiownerpin);
		o1.setNgoname(ngoname);

		session.persist(o1);


		t.commit();
		session.close();  
		factory.close();
		System.out.println("successfully saved");




		/*return Response.ok().entity("ok")
				.header("Access-Control-Allow-Origin","*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With")
				.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD")
				.build();
		 */

		return Response.status(200).entity("success").build();
	}

	@POST
	@Path("/create")
	@Consumes("text/plain")
	@Produces("text/plain")
	public String create(String user) {
		UserDetails ud=new UserDetails();
		ud.setEmailId("bkbask");
		ud.setUserName("dcnbdsn");
		return "hello";
	}


	private void writeToFile(InputStream uploadedInputStream, String uploadedFileLocation) throws Exception {
		OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
		int read = 0;
		byte[] bytes = new byte[1024];

		out = new FileOutputStream(new File(uploadedFileLocation));
		while ((read = uploadedInputStream.read(bytes)) != -1) {
			out.write(bytes, 0, read);
		}
		out.flush();
		out.close();
	}

	private void createConnection()
	{
		Connection c=null;
		Statement st= null;
		String sql=null;
		ResultSet rs=null;
		FileInputStream fis; 
		try {
			Class.forName("com.mysql.jdbc.Driver");
			c=DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root", "Anshul12");
			st=c.createStatement();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		catch (SQLException e) {
			e.printStackTrace();
		}	

	}

	@POST
	@Path("/upload_file/{username}")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML,MediaType.TEXT_HTML,MediaType.TEXT_PLAIN })	  
	public Response upload(@PathParam("username") String userName,@FormDataParam("file") InputStream  ins ,  
			@FormDataParam("file") FormDataContentDisposition fileInputDetails) 
	{
		String uploadedFileLocation="C:/My Stuff/one.jpg";
		FileInputStream fis;
		try{
			writeToFile(ins,uploadedFileLocation);
			String status = "File has been uploaded to:" + uploadedFileLocation ;
		}catch (Exception e)
		{
			return Response.status(500).entity("error").build();
		}
		//return null;
		return Response.status(200).entity("success").build();
	}


	@POST
	@Path("/uploadInvoices/{username}")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML,MediaType.TEXT_HTML,MediaType.TEXT_PLAIN })	  
	public Response uploadInvoices(@PathParam("username") String number,@FormDataParam("file") InputStream  ins ,  
			@FormDataParam("file") FormDataContentDisposition fileInputDetails) 
	{
		String uploadedFileLocation="C:/My Stuff/invoice"+number+".jpg";
		FileInputStream fis;
		try{
			writeToFile(ins,uploadedFileLocation);
			String status = "File has been uploaded to:" + uploadedFileLocation ;
		}catch (Exception e)
		{
			return Response.status(500).entity("error").build();
		}
		//return null;
		return Response.status(200).entity("success").build();
	}


	@GET
	@Path("/ngolist/{cityname}")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Response getNgoList(
			@PathParam("cityname") String city ,
			@QueryParam("taskid") String ngocity
			)
	{	

		Configuration cfg= new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory factory=cfg.buildSessionFactory();
		Session session=factory.openSession();
		Transaction t=session.beginTransaction();

		//one option
		System.out.println("cityname is "+ngocity);
		String query = "from NgoDetails as p where p.ngocity = :ngocity";
		List list = session.createQuery(query)
				.setString("ngocity", ngocity).list();

		Iterator iterator = list.iterator();
		NgoDetails obj =null;
		StringBuilder str=new StringBuilder();
		JSONObject json=null;
		str.append("{");
		int i=1;
		while (iterator.hasNext()) {
			obj = (NgoDetails) iterator.next();
			System.out.print(obj.getNgoname() + "\t" + "\n");
			str.append("ngocity"+i+":"+ obj.getNgoname()+",");
			i++;
		}
		str.append("}");
		try {
			json= new JSONObject(str.toString());
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}



		//second option
		Criteria criteria = session.createCriteria(NgoDetails.class);
		criteria.add(Restrictions.eq("ngocity", ngocity));
		NgoDetails employee = (NgoDetails) criteria.uniqueResult();

		if(employee!=null)
		{

			System.out.println(employee.getNgoname());
		}    
		//end of option two

		//option three
		/*String queryString = "from NgoDetails where ngocity = :ngocity";
        Query query1 = session.createQuery(queryString);
        query1.setString("ngocity", ngocity);
        Object queryResult = query1.uniqueResult();
        NgoDetails user = (NgoDetails)queryResult;*/
		//end of option three
		t.commit();
		session.close();  
		factory.close();
		System.out.println("successfully saved");


		final GenericEntity<List<NgoDetails>> entity
		= new GenericEntity<List<NgoDetails>>(list) {};
		System.out.println("entity is = " + entity );
		// return list;

		//  ArrayList<Actor> actorList = new ArrayList<Actor>(actors.values());
		// return Response.ok(entity).type(MediaType.APPLICATION_XML).build();


		
		
		return Response.ok().entity(json)
				
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Origin,Content-Type, Accept, X-Requested-With X-Atmosphere-Framework, X-Cache-Date, X-Atmosphere-tracking-id, X-Atmosphere-Transport")
				.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD")
				.build();
	}

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Track getTrackInJSON() {

		Track track = new Track();
		track.setTitle("Enter Sandman");
		track.setSinger("Metallica");

		return track;

	}


	@PUT
	@Path("/uploadInvoicesDetail/{username}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response uploadInvoicesDetail(@PathParam("username") String randomstring , 
			@QueryParam("taskid") String number ,  
			@QueryParam("uiusername") String ngousername, 
			@QueryParam("uiinvoicedescription") String description,
			@QueryParam("uiamount") String amount
			)
	{	

		Configuration cfg= new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory factory=cfg.buildSessionFactory();
		Session session=factory.openSession();

		Transaction t=session.beginTransaction();
		DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
		Date today = Calendar.getInstance().getTime();        
		String reportDate = df.format(today);

		File file = new File("C:/My Stuff/invoice"+number+".jpg");
		long length=file.length();
		String strLong = Long.toString(length);
		System.out.println("the size of the file +:"+strLong);

		byte[] bfile = new byte[(int)file.length()];

		try{
			FileInputStream fileInputStream = new FileInputStream(file);
			fileInputStream.read(bfile);
			fileInputStream.close();
		}catch(Exception e){
			e.printStackTrace();
		}
		NgoInvoiceDetail n1 = new NgoInvoiceDetail();
		//n1.setId(1);
		n1.setInvoicedescription(description);
		n1.setInvoicetitle("invoice");
		n1.setInvoiceamount(amount);
		n1.setUsername(ngousername);
		//n1.setSubmission_date(reportDate);
		//n1.setImagedata(bfile);
		n1.setInvoice(bfile);

		session.persist(n1);//persisting the object  


		t.commit();
		session.close();  
		factory.close();
		System.out.println("successfully saved");



		return Response.status(200).entity("success").build();
	}

}//end of class



