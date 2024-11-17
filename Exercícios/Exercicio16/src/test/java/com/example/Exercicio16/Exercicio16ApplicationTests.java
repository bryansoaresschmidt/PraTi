package com.example.Exercicio16;

import com.example.Exercicio16.controller.ProdutoController;
import com.example.Exercicio16.model.Produto;
import com.example.Exercicio16.service.ProdutoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProdutoController.class)
class Exercicio16ApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ProdutoService produtoService;

	@Test
	void findAllProdutos_ShouldReturnListOfProdutos() throws Exception {
		Produto produto1 = new Produto(1L, "Pasta de Dente", "OralB", 7.5, 20);
		Produto produto2 = new Produto(2L, "Shampoo", "HeadAndShoulders", 10.99, 16);

		when(produtoService.findAllProdutos()).thenReturn(Arrays.asList(produto1, produto2));

		mockMvc.perform(get("/api/produto"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].nome", is("Pasta de Dente")))
				.andExpect(jsonPath("$[1].nome", is("Shampoo")));
	}

	@Test
	void findProdutoById_ShouldReturnProduto_WhenFound() throws Exception {
		Produto produto1 = new Produto(1L, "Pasta de Dente", "OralB", 7.5, 20);

		when(produtoService.findProdutoById(1L)).thenReturn(Optional.of(produto1));

		mockMvc.perform(get("/api/produto/1"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.nome", is("Pasta de Dente")));
	}

	@Test
	void findProdutoById_ShouldReturnNotFound_WhenNotFound() throws Exception {
		when(produtoService.findProdutoById(1L)).thenReturn(Optional.empty());

		mockMvc.perform(get("/api/produto/1"))
				.andExpect(status().isNotFound());
	}

	@Test
	void createProduto_ShouldReturnProduto_WhenCreated() throws Exception {
		Produto produto1 = new Produto(null, "Pasta de Dente", "OralB", 7.5, 20);
		Produto produto1Created = new Produto(1L, "Pasta de Dente", "OralB", 7.5, 20);

		when(produtoService.createProduto(any(Produto.class))).thenReturn(produto1Created);

		mockMvc.perform(post("/api/produto")
						.contentType(MediaType.APPLICATION_JSON)
						.content("{\"nome\": \"Pasta de Dente\", \"marca\": \"Oral B\", \"preco\": 7.5, \"qtd\": 20}"))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.id", is(1)))
				.andExpect(jsonPath("$.nome", is("Pasta de Dente")));
	}

	@Test
	void updateProduto_ShouldReturnUpdatedProduto() throws Exception {
		Produto produto1 = new Produto(1L, "Pasta de Dente", "OralB", 7.5, 20);

		when(produtoService.updateProduto(eq(1L), any(Produto.class))).thenReturn(produto1);

		mockMvc.perform(put("/api/produto/1")
						.contentType(MediaType.APPLICATION_JSON)
						.content("{\"nome\": \"Pasta de Ovo\", \"marca\": \"Oral B\", \"preco\": 7.5, \"qtd\": 20}"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.nome", is("Pasta de Dente")))
				.andExpect(jsonPath("$.preco", is(7.5)));
	}

	@Test
	void updateProduto_ShouldReturnNotFound_WhenProdutoDoesNotExist() throws Exception {
		when(produtoService.updateProduto(eq(1L), any(Produto.class))).thenReturn(null);

		mockMvc.perform(put("/api/produto/1")
						.contentType(MediaType.APPLICATION_JSON)
						.content("{\"nome\": \"Tangerina\", \"descricao\": \"Verdadeiro nome é Bergamota\", \"preco\": 15.0, \"quantidadeEmEstoque\": 120}"))
				.andExpect(status().isNotFound());
	}

	@Test
	void deleteProduto_ShouldReturnSuccessMessage_WhenDeleted() throws Exception {
		when(produtoService.deleteProduto(1L)).thenReturn(true);

		mockMvc.perform(delete("/api/produto/1"))
				.andExpect(status().isOk())
				.andExpect(content().string("Produto deletado com sucesso"));
	}

	@Test
	void deleteProduto_ShouldReturnNotFound_WhenProdutoDoesNotExist() throws Exception {
		when(produtoService.deleteProduto(1L)).thenReturn(false);

		mockMvc.perform(delete("/api/produto/1"))
				.andExpect(status().isNotFound())
				.andExpect(content().string("Produto Id: 1 não existe no banco de dados"));
	}



	@Test
	void contextLoads() {
	}

}
