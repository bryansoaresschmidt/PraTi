// 1. Responsável pela comunicação entre o cliente (por exemplo, uma aplicação frontend ou um cliente HTTP) e o servidor. Ele lida com requisições HTTP e retorna respostas apropriadas.
// 2. Utiliza anotações para mapear requisições HTTP específicas a métodos correspondentes (definir rotas).

package com.example.api_user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.api_user.service.UserService;
import com.example.api_user.dto.UserDTO;

import java.util.List;

@RestController                                  // @RestController: Indica que essa classe é um controller do Spring que trata de requisições HTTP. A combinação com o @ResponseBody faz com que o retorno dos métodos seja convertido diretamente em JSON (ou outro formato serializado), adequado para APIs REST.
@RequestMapping("/api/users")                    // @RequestMapping: Define que todas as rotas desse controller começam com /api/users. Ou seja, as rotas são prefixadas por isso.
public class UserController {
    @Autowired                                   // @Autowired: Injeta automaticamente a dependência do UserService, que será utilizado para interagir com os dados dos usuários.
    private UserService userService;             // O UserService aqui é o responsável por implementar a lógica de negócios, e o controlador só repassa as requisições para ele.

    @GetMapping                                  // @GetMapping: Buscar todos usuários
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")                        // @GetMapping: Buscar um usuário por ID
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) { // Quando você define uma rota com parâmetros (por exemplo, /api/users/{id}), o @PathVariable permite capturar o valor de {id} da URL e usá-lo em seu método.
        UserDTO userDTO = userService.getUserById(id);

        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }

    @PostMapping                                // @PostMapping: criar um usuário
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @PutMapping("/{id}")                        // @PutMapping: atualizar um usuário
    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO) {
        UserDTO updateUser = userService.updateUser(id, userDTO);

        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")                     // @DeleteMapping: deletar um usuário
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);

        return ResponseEntity.noContent().build();
    }
}