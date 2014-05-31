package br.com.snaketl.controller;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;
import br.com.snaketl.model.Cliente;
import br.com.snaketl.repository.ClienteRepository;
import javax.inject.Inject;

/**
 *
 */
@Controller
public class ClienteController {

    private final Result result;
    private final ClienteRepository clienteRepository;

    /**
     * CDI eyes only
     *
     * @deprecated
     */
    @Deprecated
    protected ClienteController() {
        this(null, null);
    }

    @Inject
    public ClienteController(Result result, ClienteRepository clienteRepository) {
        this.result = result;
        this.clienteRepository = clienteRepository;
    }

    @Post("/cliente")
    @Consumes("application/json")
    public void create(Cliente cliente) {
        clienteRepository.create(cliente);
        result.use(Results.json()).withoutRoot().from(cliente).serialize();
    }
    
    @Get("/cliente/{cliente.id}")
    public void retrieve(Cliente cliente) {
        Cliente lido = clienteRepository.retrieve(cliente.getId());
        result.use(Results.json()).withoutRoot().from(lido).serialize();
    }

    @Put("/cliente/{cliente.id}")
    @Consumes("application/json")
    public void update(Cliente cliente) {
        clienteRepository.update(cliente);
        result.nothing();
    }

    @Delete("/cliente/{cliente.id}")
    public void delete(Cliente cliente) {
        clienteRepository.delete(cliente.getId());
        result.nothing();
    }    

    @Get("/cliente")
    public void cliente() {
        result.use(Results.json()).withoutRoot().from(clienteRepository.getAll()).serialize();
    }    

}
