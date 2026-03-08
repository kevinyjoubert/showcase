import type { ProposalData } from "./types"

interface Props {
  data: ProposalData
}

export default function ProposalPreview({ data }: Props) {

  const hoje = new Date().toLocaleDateString("pt-BR")

  return (
    <div
      id="proposal-preview"
      style={{
        width: "210mm",
        minHeight: "297mm",
        background: "#ffffff",
        padding: "60px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        lineHeight: 1.6
      }}
    >

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px"
      }}>
        <div>
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            {data.empresa || "Nome da Empresa"}
          </h1>

          <p style={{ color: "#6b7280" }}>
            Proposta Comercial
          </p>
        </div>

        <div style={{ textAlign: "right", fontSize: "14px", color: "#6b7280" }}>
          <p>Data</p>
          <p>{hoje}</p>
        </div>
      </div>


      {/* TÍTULO */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{
          fontSize: "26px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          {data.titulo || "Proposta de Prestação de Serviços"}
        </h2>

        <p style={{ color: "#6b7280" }}>
          Proposta preparada para:
        </p>

        <p style={{
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          {data.cliente || "Nome do Cliente"}
        </p>
      </div>


      {/* INTRODUÇÃO */}
      <div style={{ marginBottom: "35px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
          1. Introdução
        </h3>

        <p>
          A presente proposta tem como objetivo apresentar uma solução adequada
          para atender às necessidades da empresa <strong>{data.cliente || "cliente"}</strong>.
          Nosso compromisso é fornecer um serviço de alta qualidade,
          garantindo eficiência, confiabilidade e resultados concretos.
        </p>
      </div>


      {/* ESCOPO */}
      <div style={{ marginBottom: "35px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
          2. Escopo do Serviço
        </h3>

        <p>
          {data.descricao ||
            "Descrição detalhada do serviço ou produto oferecido. Aqui devem ser apresentados os principais pontos do trabalho que será realizado."}
        </p>
      </div>


      {/* CONDIÇÕES */}
      <div style={{ marginBottom: "35px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
          3. Condições Comerciais
        </h3>

        <div style={{
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "8px"
        }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}>
            <span>Prazo estimado:</span>
            <strong>{data.prazo || "A definir"}</strong>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px"
          }}>
            <span>Investimento:</span>
            <strong style={{ color: "#16a34a" }}>
              {data.valor || "R$ 0,00"}
            </strong>
          </div>

        </div>
      </div>


      {/* CONCLUSÃO */}
      <div style={{ marginBottom: "60px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
          4. Considerações Finais
        </h3>

        <p>
          Permanecemos à disposição para quaisquer esclarecimentos adicionais.
          Será um prazer contribuir para o sucesso deste projeto e estabelecer
          uma parceria sólida e duradoura.
        </p>
      </div>


      {/* ASSINATURA */}
      <div style={{ marginTop: "80px" }}>

        <div style={{
          borderTop: "1px solid #d1d5db",
          width: "300px",
          paddingTop: "10px"
        }}>
          <p style={{ fontWeight: "bold" }}>
            {data.responsavel || "Responsável"}
          </p>

          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            {data.empresa || "Empresa"}
          </p>
        </div>

      </div>

    </div>
  )
}