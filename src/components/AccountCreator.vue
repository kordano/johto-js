<template>
  <div>
    <button v-on:click='toggleModal' class="btn btn-primary">New Account</button>
    <div :class="modalStatus" id="new-account-modal">
      <a href="#close" v-on:click='toggleModal' class="model-overlay" aria-label="Close"></a>
      <div class="modal-container">
        <div class="modal-header">
          <a href="#close" v-on:click='toggleModal' class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">New Account</div>
        </div>
      <div class="modal-body">
        <div class="content">
          <div class="form-group">
            <label for="input-firstname" class="form-label">Firstname</label>
            <input class="form-input" v-model.trim="firstname" id="input-firstname" placeholder="Firstname">
          </div>
          <div class="form-group">
            <label for="input-lastname" class="form-label">Lastname</label>
            <input class="form-input" id="input-lastname" v-model.trim="lastname" placeholder="Lastname">
          </div>
          <div class="form-group">
            <label for="input-label" class="form-label">Level</label>
            <select id="input-label" class="form-select" v-model.number="level" placeholder="Level">
              <option value="0">Other</option>
              <option value="1">Extern</option>
              <option value="2" selected>User</option>
              <option value="3">Admin</option>
            </select>
          </div>
          <div class="form-group">
            <label for="input-email" class="form-label">Email</label>
            <input class="form-input" id="input-email" v-model.trim="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="input-phone" class="form-label">Phone</label>
            <input class="form-input" id="input-phone" v-model.trim="phone" placeholder="Phone">
          </div>
          <div class="form-group">
            <label for="input-occupation" class="form-label">Occupation</label>
            <input class="form-input" id="input-occupation" v-model.trim="occupation" placeholder="Occupation">
          </div>
        </div>
      </div>
      <div class="modal-footer">
      <button class="btn btn-primary" v-on:click='createAccount()'>Create</button>
      <button class="btn btn-link" v-on:click='toggleModal'>Cancel</button>
      </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AccountLevel, Account } from '@/models/Account.ts';
import { ToastStatus } from '@/models/ViewHelpers.ts'; 
import store from '@/store';
import { CREATE_ACCOUNT, SHOW_TOAST } from '@/mutation-types';
import uuid from 'uuid/v4';

function isMissing(s: string): void {
  alert(s + ' is missing!');
}

@Component
export default class AccountCreator extends Vue {
  public modalStatus = 'modal';
  public firstname = '';
  public lastname = '';
  public level = 0;
  public email = '';
  public phone = '';
  public occupation = '';

  public toggleModal() {
    if (this.modalStatus === 'modal active') {
      this.modalStatus = 'modal';
    } else {
      this.modalStatus = 'modal active';
    }
  }

    public createAccount() {
        if (this.firstname.length === 0  || this.firstname == null) {
        isMissing('Firstname');
      } else if (this.lastname.length === 0 || this.lastname == null) {
        isMissing('Lastname');
      } else if (this.email.length === 0 || this.email == null) {
        isMissing('Email');
      } else if (this.phone.length === 0 || this.phone == null) {
        isMissing('Phone');
      } else if (this.occupation.length === 0 || this.occupation == null) {
        isMissing('Occupation');
      } else {
        const account = new Account(uuid(),
                                    this.level,
                                    this.firstname,
                                    this.lastname,
                                    this.email,
                                    this.phone,
                                    this.occupation,
                                    uuid());
        store.commit(CREATE_ACCOUNT, account);
        store.commit(SHOW_TOAST, "Account created!", ToastStatus.ERROR);
        this.firstname = '';
        this.lastname = '';
        this.level = 0;
        this.email = '';
        this.phone = '';
        this.occupation = '';
        this.toggleModal();
      }
    }
}

</script>
