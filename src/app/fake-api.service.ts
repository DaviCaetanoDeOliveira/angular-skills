import { Injectable } from '@angular/core';
import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';

@Injectable({
  	providedIn: 'root'
})

export class FakeApiService implements InMemoryDbService 
{
	constructor() 
	{ }

	skills = [
		{ id: 1, name: 'TypeScript', level: "Profissional", description: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png', likes: 1 },
		{ id: 2, name: 'CSS', level: "Profissional e Acadêmico", description: 'Cascading Style Sheets (abreviado CSS) é um mecanismo para adicionar estilos (cores, fontes, espaçamento, etc.) a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', likes: 1 },
		{ id: 3, name: 'HTML', level: "Profissional e Acadêmico", description: 'HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto") é uma linguagem de marcação utilizada na construção de páginas na Web. A tecnologia é fruto da junção entre os padrões HyTime e SGML.', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/640px-HTML5_logo_black.svg.png', likes: 1 },
		{ id: 4, name: 'JavaScript', level: "Acadêmico", description: 'JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png', likes: 1 },
		{ id: 5, name: 'C#', level: "Profissional e Acadêmico", description: 'C# é uma linguagem de programação orientada a objetos e orientada a componentes. C# fornece construções de linguagem para dar suporte diretamente a esses conceitos, tornando C# uma linguagem natural para criação e uso de componentes de software.', pic: 'https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png', likes: 1 },
		{ id: 6, name: 'Angular', level: "Profissional", description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.', pic: 'https://jmvstream.com/wp-content/uploads/2023/07/Angular.jpeg', likes: 1 },
		{ id: 7, name: 'SQL', level: "Profissional e Acadêmico", description: 'Structured Query Language (SQL), lit. "linguagem de consulta estruturada", é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados, ou para processamento de fluxo de dados em um sistema de gerenciamento de fluxo de dados.', pic: 'https://static.tildacdn.com/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg', likes: 1 },
		{ id: 8, name: 'Microsoft SQL Server', level: "Profissional", description: 'O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional (SGBD) desenvolvido pela Sybase em parceria com a Microsoft. Esta parceria durou até 1994, com o lançamento da versão para Windows NT e desde então a Microsoft mantém a manutenção do produto.', pic: 'https://www.webmundi.com/wp-content/uploads/Microsoft-SQL-Server.png', likes: 1 },
		{ id: 9, name: 'MySQL', level: "Acadêmico", description: 'O MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.', pic: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/MySQL-Logo.wine.png', likes: 1 },
		{ id: 10, name: 'Stimulsoft', level: "Profissional", description: 'Stimulsoft Reports.Web é uma ferramenta para a criação de relatórios que pode ser executada no navegador e é facilmente integrada a aplicações ASP.NET, ASP.NET MVC e .NET Core.', pic: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Stimulsoft.png', likes: 1 },
		{ id: 11, name: 'Microsoft Power BI', level: "Acadêmico", description: 'O Microsoft Power BI é um serviço de análise de negócios e analise de dados da desenvolvedora Microsoft lançado a 24 de julho de 2015. O objetivo do Power BI é fornecer visualizações interativas e recursos de business intelligence (BI) em uma interface para que os usuários finais criem relatórios e dashboards personalizados.', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png', likes: 1 },
		{ id: 12, name: 'Arquitetura MVC', level: "Profissional", description: 'MVC é o acrônimo de Model-View-Controller (em português: Arquitetura Modelo-Visão-Controle - MVC) é um padrão de projeto de software, ou padrão de arquitetura de software formulado na década de 1970, focado no reuso de código e a separação de conceitos em três camadas interconectadas, onde a apresentação dos dados e interação dos usuários (front-end) são separados dos métodos que interagem com o banco de dados (back-end).', pic: 'https://sempreju.com.br/wp-content/uploads/2020/04/MVC_ADVPL.png', likes: 1 },
		{ id: 13, name: 'Web Services', level: "Profissional", description: 'Web Service é uma solução utilizada na integração de sistemas e na comunicação entre aplicações diferentes. Com esta tecnologia é possível que novas aplicações possam interagir com aquelas que já existem e que sistemas desenvolvidos em plataformas diferentes sejam compatíveis.', pic: 'https://vitolavecchia.altervista.org/wp-content/uploads/2019/06/Web-Services-Differenza-tra-XML-SOAP-WSDL-e-UDDI.png', likes: 1 },
		{ id: 14, name: 'API REST', level: "Profissional e Acadêmico", description: 'Na informática e engenharia de software, Representational State Transfer (abreviado REST), em português Transferência de Estado Representacional, é um estilo de arquitetura de software, criado em 2000 por Roy Fielding, que define um conjunto de restrições a serem usadas para a criação de um tipo especial de serviços-Web, denominados Web services RESTful, que fornecem interoperabilidade entre sistemas de computadores na Internet.', pic: 'https://cdn.vockan.com/2022/wp-content/uploads/2023/03/02192332/restapi2.png', likes: 1 },
	];

	createDb() 
	{
		return { skills: this.skills, like: this.like };
  	}

	post(reqInfo: any) 
	{
		if (reqInfo.collectionName === 'like')
		{
			const result = this.like(reqInfo.req.body);
			return reqInfo.utils.createResponse$(() => {
				const options =
				{
					body: result,
					status: STATUS.OK
				} 

				return options;
			});
		}
	}

	like(id: number) 
	{
		let index = this.skills.findIndex(skill => {
		  	return id === skill.id;
		});
  
		this.skills[index].likes++;
		return this.skills[index];
	}
}
