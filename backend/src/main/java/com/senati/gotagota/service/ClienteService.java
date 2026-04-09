package com.senati.gotagota.service;

import com.senati.gotagota.entity.Cliente;
import com.senati.gotagota.repository.ClienteRepository;
import org.springframework.stereotype.Service;
import java.util.List;

//importamos la anotacion @service
//esta es la capa de a logica de nogocio, aqui van las validaciones, calculos,etc.
@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository){
        this.clienteRepository = clienteRepository;
    }
    public List<Cliente> listarTodos(){
        return clienteRepository.findAll();
    }
}
