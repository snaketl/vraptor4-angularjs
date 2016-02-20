package br.com.luizfeltes.backend.dao;

import br.com.luizfeltes.backend.model.Cliente;
import br.com.luizfeltes.backend.repository.ClienteRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import javax.enterprise.context.RequestScoped;

/**
 * Repositorio de exemplo para armazenar os clientes de forma simples
 */
@RequestScoped
public class ClienteDAO implements ClienteRepository {
    
    private static final Map<Long, Cliente> database = new TreeMap<>();
    private static int lastId = 1;

    @Override
    public void create(Cliente cliente) {
        cliente.setId(lastId++);        
        database.put(cliente.getId(), cliente);
    }

    @Override
    public Cliente retrieve(long id) {
        return database.get(id);
    }

    @Override
    public void update(Cliente cliente) {
        database.put(cliente.getId(), cliente);
    }

    @Override
    public void delete(long id) {
        database.remove(id);
    }

    @Override
    public List<Cliente> getAll() {
        return new ArrayList<>(database.values());
    }
}
