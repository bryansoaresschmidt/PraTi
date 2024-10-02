ackage com.example.api_user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.api_user.service.UserService;
import com.example.api_user.dto.UserDTO;

import java.util.List;

@RestController // Define essa classe como um controlador REST, que trata requisições HTTP (GET, POST, etc.).
@RequestMapping("/api/users") // Define o caminho base "/api/users" para as requisições que este controlador irá tratar.
public class UserController {

    @Autowired
    private UserService userService;
    // Injeta automaticamente a dependência do serviço UserService, que contém a lógica de negócios para gerenciar usuários.

    @GetMapping
    public List<UserDTO> getAllUsers() {
        // Metodo para lidar com requisições GET na rota "/api/users".
        // Retorna uma lista de todos os usuários no formato DTO (Data Transfer Object).
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
        // Metodo para lidar com requisições GET na rota "/api/users/{id}".
        // Busca um usuário pelo seu ID (fornecido na URL) e retorna os dados no formato UserDTO.
        UserDTO userDTO = userService.getUserById(id);

        // Se o usuário for encontrado, retorna um status HTTP 200 (OK) com os dados do usuário.
        // Se não for encontrado, retorna um status HTTP 404 (Not Found).
        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        // Metodo para lidar com requisições POST na rota "/api/users".
        // Cria um novo usuário com base nos dados fornecidos no corpo da requisição (JSON convertido em UserDTO).
        return userService.createUser(userDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO) {
        // Metodo para lidar com requisições PUT na rota "/api/users/{id}".
        // Atualiza os dados de um usuário existente com base no ID fornecido e nas informações do corpo da requisição.
        UserDTO updateUser = userService.updateUser(id, userDTO);

        // Se a atualização for bem-sucedida, retorna um status HTTP 200 (OK) com os dados atualizados.
        // Se o usuário não for encontrado, retorna um status HTTP 404 (Not Found).
        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        // Metodo para lidar com requisições DELETE na rota "/api/users/{id}".
        // Remove o usuário com base no ID fornecido.
        userService.deleteUser(id);

        // Após a exclusão, retorna um status HTTP 204 (No Content), indicando que a operação foi bem-sucedida e não há conteúdo para retornar.
        return ResponseEntity.noContent().build();
    }
}