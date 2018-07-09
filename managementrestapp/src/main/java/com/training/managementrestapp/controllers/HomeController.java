package com.training.managementrestapp.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	String getHomePage(HttpServletRequest request,HttpServletResponse response) throws IOException{
		return "forward:index.jsp";
	}
	@RequestMapping("/showMessage")
	@ResponseBody String getMessage(HttpServletRequest request,HttpServletResponse response){
	//request.setAttribute("message","Hello");
	return "showMessage";	
	}
}
