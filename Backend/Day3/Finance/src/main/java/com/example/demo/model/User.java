package com.example.demo.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.examole.demo.role.Roles;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class User implements UserDetails{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private long uid;
	private String name;
	private String password;
	private String email;
	private Boolean isEnabled;

	    @Enumerated(EnumType.STRING)
	    private Roles role;
	
	//Expense
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="uid",referencedColumnName="uid")

	
	private List<Expense> e;
	public List<Expense> getE() {
		return e;
	}
	public void setE(List<Expense> e) {
		this.e = e;
	}
	
	//Income
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="uid",referencedColumnName="uid")
	
	private List<Income> i;
	public List<Income> getI() {
		return i;
	}
	public void setI(List<Income> i) {
		this.i = i;
	}
	
	
	 @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        return List.of(new SimpleGrantedAuthority(role.name()));
	    }

	    @Override
	    public String getPassword() {
	        return password;
	    }

	    @Override
	    public String getUsername() {
	        return email;
	    }

	    @Override
	    public boolean isAccountNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isAccountNonLocked() {
	        return true;
	    }

	    @Override
	    public boolean isCredentialsNonExpired() {
	        return true;
	    }

	    @Override
	    public boolean isEnabled() {
	        return true;
	    }



}
