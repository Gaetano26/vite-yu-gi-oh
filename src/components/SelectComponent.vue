:<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <select class="form-select ms-1 my-3">
                    <option selected>all</option>
                    <option value="alien">alien</option>
                </select>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
       name: 'SelectComponent'
        
    }
</script>

<style lang="scss" scoped>
  select {
    max-width: 150px;
  }

</style>