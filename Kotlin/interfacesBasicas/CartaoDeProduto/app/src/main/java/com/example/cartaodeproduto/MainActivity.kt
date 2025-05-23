package com.example.cartaodeproduto
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cartaodeproduto.ui.theme.CartaoDeProdutoTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CartaoDeProdutoTheme {
                ProdutoCartao()

            }
        }
    }
}
@Composable
fun ProdutoCartao() {
    Surface(
        modifier = Modifier
            .fillMaxHeight()
            .fillMaxWidth(),
        color = Color(0xFF546E7A)
    ) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Produto(
                name = "Tênis Nyke",
                preco = "120",

            )
            }
        }
    }

@Composable
fun Produto(name: String, preco: String) {

    Card(
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFF7996FF)),
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
    ) {
        Column(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(text = "Produto: $name", color = Color.White, fontSize = 18.sp)
            Text(text = "Preço: $preco", color = Color.White, fontSize = 16.sp)
            Card(
                modifier = Modifier
                    .padding(3.dp) // Espaçamento externo
                    .size(90.dp), // Altura e largura iguais
                shape = CircleShape, // Formato circular
                colors = CardDefaults.cardColors(containerColor = Color(0xFF00BCD4)),
            ) {

                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text(text = "Comprar")
                }
            }
        }
    }
}

