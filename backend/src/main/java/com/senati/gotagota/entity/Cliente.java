package com.senati.gotagota.entity;

import jakarta.persistence.*;

//le dice a hibernante que esta clase esta representada
@Entity
//indica el nombre exacto de la tabla
@Table(name = "cliente")

public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cliente_id")
    private long Id;


    @Column(nullable = false)
    private String nombre;


    @Column(nullable = false)
    private String apellido;


    @Column(nullable = false,unique = true,length = 8)
    private String dni;

    //sin anotaciones (@) extra: columna normal, puede ser nula
    private String telefono;
    private String direccion;

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
