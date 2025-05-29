import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-marcJoao',
  templateUrl: './marcJoao.page.html',
  styleUrls: ['./marcJoao.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class MarcJoaoPage {
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  mesSelecionado: number = new Date().getMonth();
  diaSelecionado: number | null = null;
  horaSelecionado: string | null = null;
  barbeiroSelecionado: string | null = null;

  diasVisiveis: { dia: number, semana: string }[] = [];
  horarios: string[] = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  // Armazena agendamentos: chave = barbeiro-mes-dia, valor = array de horários agendados
  agendamentos: { [key: string]: string[] } = {};

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gerarDiasDoMes(this.mesSelecionado);

    // Captura barbeiro selecionado da queryParams (enviado da página anterior)
    this.route.queryParams.subscribe(params => {
      this.barbeiroSelecionado = params['barbeiro'] || null;
    });
  }

  gerarDiasDoMes(mes: number) {
    // Simplificado: sempre 30 dias
    this.diasVisiveis = Array.from({ length: 30 }, (_, i) => {
      return {
        dia: i + 1,
        semana: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][(i + 1) % 7]
      };
    });
    // Reseta seleções ao mudar mês
    this.diaSelecionado = null;
    this.horaSelecionado = null;
  }

  mesAnterior() {
    if (this.mesSelecionado > 0) {
      this.mesSelecionado--;
      this.gerarDiasDoMes(this.mesSelecionado);
    }
  }

  mesProximo() {
    if (this.mesSelecionado < 11) {
      this.mesSelecionado++;
      this.gerarDiasDoMes(this.mesSelecionado);
    }
  }

  selecionarDia(dia: number) {
    this.diaSelecionado = dia;
    this.horaSelecionado = null;
  }

  estaAgendado(hora: string): boolean {
    if (!this.barbeiroSelecionado || this.diaSelecionado === null) return false;
    const key = this.getAgendamentoKey();
    return this.agendamentos[key]?.includes(hora) ?? false;
  }

  selecionarHorario(hora: string) {
    if (this.estaAgendado(hora)) {
      alert('Esse horário já está agendado, escolha outro.');
      return;
    }
    this.horaSelecionado = hora;
  }

  async agendarHorario() {
    if (this.diaSelecionado === null || !this.horaSelecionado || !this.barbeiroSelecionado) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Por favor, selecione mês, dia, horário e barbeiro.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const key = this.getAgendamentoKey();

    if (!this.agendamentos[key]) {
      this.agendamentos[key] = [];
    }

    if (this.agendamentos[key].includes(this.horaSelecionado)) {
      const alert = await this.alertCtrl.create({
        header: 'Horário ocupado',
        message: 'Esse horário já foi agendado, escolha outro.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.agendamentos[key].push(this.horaSelecionado);

    const alert = await this.alertCtrl.create({
      header: 'Agendamento Confirmado',
      message: `Agendamento para o dia ${this.diaSelecionado} de ${this.meses[this.mesSelecionado]}, às ${this.horaSelecionado}, com ${this.barbeiroSelecionado}.`,
      buttons: ['OK']
    });

    await alert.present();

    // Limpa seleção para novo agendamento
    this.horaSelecionado = null;
    this.diaSelecionado = null;
  }

  getAgendamentoKey(): string {
    return `${this.barbeiroSelecionado}-${this.mesSelecionado}-${this.diaSelecionado}`;
  }

  irParaMarcpag() {
    this.router.navigate(['/pagePrincipal/marcpage']);
  }
}
