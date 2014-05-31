package br.com.snaketl.repository;

import br.com.snaketl.model.Cliente;
import java.util.List;

/**
 *
 */
public interface ClienteRepository {
    
    public void create(Cliente cliente);
    public Cliente retrieve(long id);
    public void update(Cliente cliente);
    public void delete(long id);
    public List<Cliente> getAll();
    
}
