package com.example.api_user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.api_user.service.UserService;
import com.example.api_user.dto.UserDTO;

import java.util.List;

@RestController // @RestController: Combina @Controller e @ResponseBody. Indica que esta classe é um controlador no Spring MVC, que lida com requisições HTTP. Todos os métodos retornam objetos diretamente, que serão serializados para JSON ou XML, dependendo do cabeçalho da requisição. Spring converte automaticamente o retorno dos métodos em dados JSON ou XML (geralmente JSON em APIs REST).
@RequestMapping("/api/users") // @RequestMapping("/api/users"): Define um caminho base para todas as requisições que esta classe vai manipular. Esse caminho pode ser refinado em cada método.
public class UserController {

    @Autowired // @Autowired: Spring gerencia a criação e injeção dessa instância de UserService automaticamente, sem necessidade de instanciá-la manualmente.
    private UserService userService; // - O UserService aqui é o responsável por implementar a lógica de negócios, e o controlador só repassa as requisições para ele.

    @GetMapping // @GetMapping: Mapeia requisições HTTP GET. O caminho associado a este método é o definido por @RequestMapping na classe, ou seja, "/api/users".
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers(); // Obter a lista de todos os usuários. A lista de objetos UserDTO será convertida em JSON pelo Spring e enviada como resposta.
    }

    @GetMapping("/{id}") // @GetMapping("/{id}"): Mapeia uma requisição HTTP GET que inclui um parâmetro dinâmico na URL. O parâmetro dinâmico "{id}" será extraído da URL e passado como argumento para o método, graças à anotação @PathVariable.
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) { // @PathVariable: Associa o valor do parâmetro dinâmico na URL ao argumento `id` do metodo. Por exemplo, se a URL for "/api/users/5", o valor `5` será capturado e passado para o parâmetro `id`.
        UserDTO userDTO = userService.getUserById(id); // Busca o usuário pelo ID fornecido, chamando o método `getUserById` no serviço.

        // O ResponseEntity encapsula a resposta HTTP e nos permite definir o corpo e o código de status. ResponseEntity.ok(userDTO): Retorna o corpo da resposta com o objeto `userDTO` e o código de status HTTP 200 (OK).
        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
        // - ResponseEntity.notFound().build(): Retorna uma resposta sem corpo e com o código de status 404 (Not Found) se o usuário não for encontrado.
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) { // @RequestBody: informar ao Spring que o JSON que chega no corpo da requisição deve ser convertido em um objeto UserDTO. Sem o @RequestBody, o Spring não saberá que deve esperar um JSON e transformar isso em um UserDTO, o que pode causar erros (como receber null ou lançar uma exceção).
        return userService.createUser(userDTO); // Chama o serviço para criar um novo usuário e retorna o objeto UserDTO criado. O Spring converte automaticamente o objeto UserDTO retornado para JSON, que será o corpo da resposta HTTP.
    }
    // Com @RequestBody: O Spring sabe que o JSON da requisição precisa ser convertido em UserDTO.
    // Sem @RequestBody: O Spring não tenta essa conversão, e o parâmetro userDTO do método será null ou resultará em um erro de conversão.

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO) {
        UserDTO updateUser = userService.updateUser(id, userDTO); // O método do serviço é chamado para atualizar o usuário com base no ID fornecido.

        // Se a atualização for bem-sucedida (ou seja, se `updateUser` não for nulo), retorna o usuário atualizado com o código de status HTTP 200 (OK).
        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
        // Caso contrário, retorna uma resposta com status HTTP 404 (Not Found) para indicar que o usuário com o ID fornecido não foi encontrado.
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userService.deleteUser(id); // Chama o serviço para excluir o usuário com base no ID fornecido.

        // ResponseEntity.noContent().build(): Retorna uma resposta HTTP sem corpo com o código de status 204 (No Content). O código 204 indica que a operação foi bem-sucedida, mas que não há dados a serem retornados no corpo da resposta.
        return ResponseEntity.noContent().build();
    }
}
