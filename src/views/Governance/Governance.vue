<template>
    <div class="governance-page">
        <GovernmentAsset
            :totalStake="totalStake.totalStake | toFixed(4) | toFormat"
            :totalReward="totalReward | toFixed(4) | toFormat"
            :pool="pool | toFixed(4) | toFormat"
            :burn="burn | toFixed(4) | toFormat"
            :balance-of="erc2917TokenInfo.balance | toFixed(4) | toFormat"
            :name="erc2917TokenInfo.name"
        ></GovernmentAsset>
        <Balance
            :tokenInfo="tokenInfo"
            :totalStake="totalStake"
            @upData="init"
        ></Balance>
        <h2>Token info:{{ erc2917TokenInfo }}</h2>
        <h2>Testnet Info:{{ testNetInfo }}</h2>
        <h2>TokenList : {{ tokenList }}</h2>
        <div class="title">
            <span class="balance">{{
                $t("governanceControl.bellottitle")
            }}</span
            >&nbsp;&nbsp;
            <span class="total">{{
                totalStake.stakeAmount | toFixed(4) | toFormat
            }}</span>
            <el-tooltip
                effect="dark"
                :content="$t('governanceControl.proTxts.1')"
                placement="right-start"
            >
                <a-icon class="icon" type="icon-wenhao" />
            </el-tooltip>
        </div>
        <YourBallot :totalStake="totalStake"></YourBallot>
    </div>
</template>

<script>
import GovernmentAsset from "./GovernmentAsset";
import Balance from "./Balance";
import YourBallot from "./YourBallot";
import ChainApi from "../../../static/sdk/ChainApi";
import { mapState } from "vuex";
import { combineLatest } from "rxjs";

export default {
    components: {
        GovernmentAsset,
        Balance,
        YourBallot
    },
    name: "Governance",
    data() {
        return {
            totalReward: "",
            pool: "",
            totalStake: {
                redeemAmount: "",
                remainBlock: "",
                stakeAmount: "",
                totalStake: ""
            },
            tokenInfo: {
                address: "",
                allowance: "",
                allowance_gov: "",
                balance: "",
                decimals: "",
                status: "",
                symbol: "",
                totalSupply: ""
            },
            erc2917TokenInfo: {},
            burn: "",
            $sub: null,
            testNetInfo: {},
            tokenList: []
        };
    },
    watch: {},
    computed: {
        ...mapState({
            isConnect: "isConnect",
            account: "account"
        })
    },
    mounted() {
        this.init();
    },
    destroyed() {
        this.$sub && this.$sub.unsubscribe();
    },
    methods: {
        init() {
            this.$sub = this.comb();
        },

        comb() {
            return combineLatest([
                this.$swap.loginStatus(),
                this.$swap.chainId()
            ]).subscribe(([isLogin, chainId]) => {
                if (isLogin) {
                    this.getFee();
                    this.queryStakeInfo();
                    this.getPool();
                    this.getCoinInfo();
                    this.getERC2917Info();
                }
            });
        },
        getFee() {
            this.$swap.getBurn().then(res => {
                this.burn = res;
            });
            this.$swap.getTotalFee().then(res => {
                this.totalReward = res.totalReward;
            });
        },
        queryStakeInfo() {
            this.$store.dispatch("governance/queryStakeInfo").then(stake => {
                this.totalStake = stake;
            });
        },
        getPool() {
            this.$store.dispatch("governance/getPool").then(pool => {
                this.$store.commit("governance/setPoolAmount", pool);
                this.pool = pool;
            });
        },
        getCoinInfo() {
            this.$store.dispatch("governance/getCoinInfo").then(info => {
                this.tokenInfo = info;
            });
        },
        getERC2917Info() {
            this.$store.dispatch("governance/getERC2917Info").then(info => {
                this.erc2917TokenInfo = info.tokenInfo;
                this.testNetInfo = info.testNetInfo;
                this.tokenList = info.tokenList;
            });
        }
    }
};
</script>

<style lang="less" scoped>
.governance-page {
    height: 100%;
    h2 {
        color: white;
    }
    .title {
        height: 80px;
        display: flex;
        align-items: center;
        border-bottom: 1px dashed #ffffff;

        .balance {
            font-size: 16px;
            color: var(--col-main-active);
            font-weight: bold;
            margin-right: 5px;
        }

        .total {
            font-size: 16px;
            font-weight: bold;
            color: var(--col-main);
            margin-right: 20px;
        }

        .icon {
            font-size: 16px;
            color: #ffffff;
        }
    }
}

@media (max-width: 960px) {
    .governance-page {
        .title {
        }
    }
}
</style>
