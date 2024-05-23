import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import eu from './assets/eu.jpeg';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={eu} style={styles.eu} resizeMode='contain'></Image>
      <Text style={styles.textoPagina}>PERFIL </Text>
      <Text style={styles.conteudopagina}>Advogada,inscrita na OAB/PE sob o nº
35.259-D, com formação em Direito e
Análise e Desenvolvimento de Dados, em
curso e Pós Graduação em Direito
Tributário e Processo Tributário, além de
atuação profissional no Setor Público e
Privado, nas áreas de Licitação, Contratos
e Jurídica. Perfil responsável, otimista e
produtivo, com facilidade de aprendizado
e de trabalho em equipe.</Text>
    </View>

  );
};
 
const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>FORMAÇÃO ACADÊMICA</Text>
      <Text style={styles.conteudoPagina}>FACSENAC: 
Análise e Desenvolvimento de Sistemas
Ano: 2023.1 em andamento, conclusão em
2025.1</Text>
      <Text style={styles.conteudoPagina}>Faculdade CERS:
Pós-Graduação em Direito Tributário
e Processo Tributário
Ano: 2022.2</Text>
      <Text style={styles.conteudoPagina}>Faculdade Integrada Barros Melo:
Graduação em Direito
Ano: 2006.2</Text>
    </View>
  );
};
 
const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>EXPERIENCIA PROFISSIONAL</Text>
      <Text style={styles.CONTEUDOPagina}>Controladoria Geral do Municipio do Recife - Prefeitura da Cidade do Recife
      Gestora da Unidade de Transparência Passiva
      Ano: 2024 até os dias de hoje</Text>
      <Text style={styles.CONTEUDOPagina}>Secretaria de Desenvolvimento Economico, Agricultura, Turismo, Cultura
e de Lazer – Prefeitura Municipal do Jaboatão dos Guararapes
Assessora Jurídica
Ano:2023 até 2024</Text>
      <Text style={styles.CONTEUDOPagina}>Secretaria de Cultura do Estado de Pernambuco
Assessora Jurídica
Ano: 2023</Text>
      <Text style={styles.CONTEUDOPagina}>Ordem dos Advogados do Brasil - Seccional
Pernambuco
Membro de Comissão da Subcomissão de
Privacidade e Proteção de Dados da
OAB/PE.
Ano: 2021</Text>
      <Text style={styles.CONTEUDOPagina}>Câmara Municipal de Veradores do Moreno
Assessora Parlamentar
Anos: 2019 a 2020</Text>
      <Text style={styles.CONTEUDOPagina}>Prefeitura Municipal de Jaboatão dos Guararapes
Membro Permanente de Comissão de Licitação
Pregoeira Substituta da Comissão de Obras e Serviços de Engenharia
Analista de Contratos e Convênios
Anos: 2017 a 2019</Text>
      <Text style={styles.CONTEUDOPagina}>Browne Advocacia
Gestora do Contencioso Cível
Anos: 2015 e 2016</Text>
      <Text style={styles.CONTEUDOPagina}>Siqueira Castro Advogados
Advogada Trabalhista
Anos: 2014 e 2015</Text>
      <Text style={styles.CONTEUDOPagina}>Farina Ventrilho Advogados e Associados
Coordenadora do
Núcleo de
Juizado Especial
Cível Anos:2012 e
2013</Text>
      
    </View>
  );
};
 
const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Certificações</Text>
      <Text style={styles.textoopagina}>Curso Power BI 
      </Text>
      <Text style={styles.textoopagina}>Semana Jurídica LGPD - ESA-OAB/PE</Text>
      <Text style={styles.textoopagina}>Captação de Recursos para Startap - SEBRAE</Text>
      <Text style={styles.textoopagina}>Elaboração de Termo de Referência - Tribunal de Contas do Paraná</Text>
      <Text style={styles.textoopagina}>Formação de Pregoeiros - Escola Nacional de Administração Pública</Text>
      <Text style={styles.textoopagina}>Licitação para Obras e Serviços de Engenharia - Escola de Contas Públicas Prof.
Barreto Guimarães - TCE/PE</Text>
      <Text style={styles.textoopagina}>Destaques sobre Licitações e Contratos (LICON) - Escola de Contas Públicas Prof.
Barreto Guimarães - TCE/PE</Text>
      <Text style={styles.textoopagina}>Oficina de Elaboração de Planilhas de Importação do LICON - Engenharia - Escola de
Contas Públicas Prof. Barreto Guimarães - TCE/PE</Text>
    </View>
  );
};
 
const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');
 
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
 
  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };
 
  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };
 
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Currículo Mariana Pedreira</Text>
        <TouchableOpacity onPress={toggleMenu} >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>
 
      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Formação Acadêmica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Experência de Trabalho e Voluntária</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Certificações</Text>
          </TouchableOpacity>
        </View>
      )}
 
      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  titulo: {
    
    backgroundColor: '#dfcae1',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
  },
  menuIcon: {
    padding: 15,
    fontSize: 40,
    color: 'black',
   
  },
  menu: {
    backgroundColor: '#dfcae1',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
    paddingBottom: 10,
  },
  conteudopagina: {
    textAlign: 'justify',
    paddingHorizontal: 10,  
  },
  eu: {
    width: 300,
    height: 200,
  },

  conteudoPagina: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },

  CONTEUDOPagina: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  
  textoopagina: {
    textAlign: 'center',
    paddingHorizontal: 10, 
  },

});
 
export default App;
 