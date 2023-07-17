const SizeChart = () => {

    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="row" colSpan="5">Body Measurement (inches)</th>
                </tr>
                <tr>
                <th scope="col"></th>
                <th scope="col">Chest</th>
                <th scope="col">Waist</th>
                <th scope="col">Hip</th>
                <th scope="col">Sleeve</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">S</th>
                <td>33-35</td>
                <td>25-26</td>
                <td>35-37</td>
                <td>21</td>
                </tr>
                <tr>
                <th scope="row">M</th>
                <td>37-39</td>
                <td>29-31</td>
                <td>38-40</td>
                <td>22</td>
                </tr>
                <tr>
                <th scope="row">L</th>
                <td>42-44</td>
                <td>33-35</td>
                <td>43-45</td>
                <td>22.5</td>
                </tr>
                <tr>
                <th scope="row">XL</th>
                <td>49-51</td>
                <td>40-42</td>
                <td>50-52</td>
                <td>23.5</td>
                </tr>
                <tr>
                <th scope="row">XXL</th>
                <td>54-56</td>
                <td>45-47</td>
                <td>54-56</td>
                <td>24</td>
                </tr>
            </tbody>
            </table>
    );
};

export default SizeChart;