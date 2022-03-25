import React, { useEffect, useState } from "react";
import { MarketWrapper, StyledMarketContainer } from "../styles/Market.styled";
import AxieResultContainer from "./AxieResultContainer";
import { AxieResultType } from "../../models/AxieResult";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Pagination,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import { GETAXIE_QUERY } from "../../lib/api";
import { MarketLoadingSpinner } from "../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { selectUi } from "../../store";
import { uiActions } from "../../store/ui-slice";

const filters = [
  "Aquatic",
  "Bird",
  "Dawn",
  "Plant",
  "Reptile",
  "Dusk",
  "Beast",
  "Mech",
  "Bug",
];
interface criteriaState {
  classes: string[] | undefined;
  numMystic: number;
  stages: number[];
}

let isInitial = true;
let totalAxieResult = 0;
let searchParams = {
  page: "",
  class: "",
  hasMystic: false,
};

const Market: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const searchCriteria = {
    classes: queryParams.get("class")
      ? queryParams.get("class")?.split(",")
      : [],
    numMystic: queryParams.get("hasMystic") ? 1 : 0,
  };
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { loadingStatus } = useSelector(selectUi);
  const [marketContent, setMarketContent] = useState(<div></div>);
  const [classesFilter, setClassesFilter] = useState<string[]>([]);
  const [criteria, setCriteria] = useState<criteriaState>({
    ...searchCriteria,
    stages: [3, 4],
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    searchParams = { ...searchParams, page: `${value}` };
    setPage(value);
  };

  const criteriaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = classesFilter.indexOf(event.target.value);
    if (index === -1) {
      setClassesFilter([...classesFilter, event.target.value]);
    } else {
      setClassesFilter(
        classesFilter.filter(
          (classFilter) => classFilter !== event.target.value
        )
      );
    }
  };

  const toggleHasMystic = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams = {
      ...searchParams,
      hasMystic: criteria.numMystic === 0 ? true : false,
    };
    setCriteria({ ...criteria, numMystic: criteria.numMystic === 0 ? 1 : 0 });
  };

  useEffect(() => {
    return () => {
      searchParams = {
        page: "",
        class: "",
        hasMystic: false,
      };
    };
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    let classParams = classesFilter
      .map((axieClass) => `${axieClass}`)
      .join(",");
    searchParams = { ...searchParams, class: classParams };
    setCriteria((prevCriteria) => {
      return { ...prevCriteria, classes: classesFilter };
    });
  }, [classesFilter]);

  useEffect(() => {
    dispatch(uiActions.setLoadingStatus("pending"));
    let isCancelled = false;
    let axieFromCount = 0;
    const serialize = (obj: any) => {
      return Object.keys(obj)
        .map((key) => {
          if (obj[key]) {
            return `${key}=${obj[key]}`;
          }
          return null;
        })
        .filter(Boolean)
        .join("&");
    };

    history.push({
      pathname: history.location.pathname,
      search: serialize(searchParams),
    });

    for (let i = 1; i < page; i++) {
      axieFromCount += 18;
    }

    const fetchData = async () => {
      const res = await fetch(
        "https://graphql-gateway.axieinfinity.com/graphql",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            operationName: "GetAxieBriefList",
            variables: {
              from: axieFromCount,
              size: 18,
              sort: "PriceAsc",
              auctionType: "All",
              criteria: criteria,
            },
            query: GETAXIE_QUERY,
          }),
        }
      );
      if (!isCancelled) {
        const data = await res.json();
        console.log(data);
        totalAxieResult = data.data.axies.total;
        dispatch(uiActions.setLoadingStatus(""));
        setMarketContent(
          data.data.axies.results.map((result: AxieResultType) => (
            <AxieResultContainer key={result.id} axieDetail={result} />
          ))
        );
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [criteria, page, history]);

  return (
    <MarketWrapper>
      <StyledMarketContainer>
        {loadingStatus === "pending" && (
          <MarketLoadingSpinner className="loading-spinner" />
        )}

        <div className="filter">
          <FormControl component="fieldset">
            <FormLabel component="legend">Filter by:</FormLabel>
            <FormGroup aria-label="position" row>
              {filters.map((item) => {
                return (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={
                      <Checkbox
                        checked={classesFilter.includes(item)}
                        onChange={criteriaChange}
                      />
                    }
                    label={item}
                    labelPlacement="end"
                  />
                );
              })}
              <FormControlLabel
                value="0"
                checked={criteria.numMystic === 1}
                control={<Checkbox onChange={toggleHasMystic} />}
                label="Has Mystic"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="AxieResultsWrapper">{marketContent}</div>
        <div className="pagination-container">
          <Pagination
            count={Math.ceil(totalAxieResult / 18)}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </StyledMarketContainer>
    </MarketWrapper>
  );
};

export default Market;
